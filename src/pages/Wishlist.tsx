import { useSelector } from "react-redux";
import { selectLocalWishlist } from "../redux/features/productSlice";
import ProductCard from "../components/products/ProductCard";
import { useGetWishlistQuery } from "../redux/services/productApi";
import { useAuthContext } from "../context/AuthContext";
import Breadcrumb from "../components/common/Breadcrumb";
import { SkeletonCard } from "../components/common/SkeletonCard";

const Wishlist = () => {
  const { userId } = useAuthContext();
  const { data: wishlistfromBackend, isLoading } = useGetWishlistQuery(undefined, { skip: !userId });
  const localWishlist = useSelector(selectLocalWishlist);
  const wishlist = userId ? wishlistfromBackend : localWishlist
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-20'>
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Wishlist" },
        ]}
      />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 py-8 md:py-10'>
        {isLoading ? (
          Array(8).fill(0).map((_, i) => (
            <div key={i}>
              <SkeletonCard />
            </div>
          ))
        ) : wishlist && wishlist.length > 0 ? (
          wishlist.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        )}

      </div>
    </div>
  )
}
export default Wishlist