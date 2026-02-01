
import { useSearchParams } from "react-router-dom"
import { useGetProductsQuery } from "../redux/services/productApi";
import ProductCard from "../components/products/ProductCard";

const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const { data: allProducts, isLoading } = useGetProductsQuery({
    category: category || undefined,
    page: 1,
    limit: 12,
  });

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {
        allProducts?.products?.map(product => (
          <ProductCard key={product._id} {...product} />
        ))
      }
    </div>
  )
}

export default AllProducts