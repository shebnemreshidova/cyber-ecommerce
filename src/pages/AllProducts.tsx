import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery, type Product } from "../redux/services/productApi";
import ProductCard from "../components/products/ProductCard";
import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Breadcrumb from "../components/common/Breadcrumb";


const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const search = searchParams.get("search") || "";

  const [page, setPage] = useState(1);
  const [allProduct, setAllProduct] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { data: responseProduct } = useGetProductsQuery({
    query: search,
    category: category || undefined,
    page,
    limit: 12,
  });

  useEffect(() => {
    setPage(1);
    setAllProduct([]);
    setHasMore(true);
  }, [category, search]);

  useEffect(() => {
    if (!responseProduct?.products) return;

    setAllProduct(prev => [...prev, ...responseProduct.products]);

    const isLastPage =
      page >= responseProduct.pagination.totalPages;

    setHasMore(!isLastPage);
  }, [responseProduct, page]);



  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };


  return (
    <div className=" px-4 sm:px-8 md:px-16 lg:px-20">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Wishlist" },
        ]}
      />
      <div className="flex gap-10">
        <div className="w-2/4">Filter bar</div>
        <InfiniteScroll
          dataLength={allProduct.length}
          next={handleLoadMore}
          hasMore={hasMore}
          loader={<div className="loading">Loading...</div>}
          endMessage={<div className="end-message">No more products</div>}

        >
          <div className="flex flex-wrap gap-5">
            {allProduct.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default AllProducts;
