import { useSelector } from "react-redux";
import { selectLocalWishlist } from "../redux/features/productSlice";
import ProductCard from "../components/products/ProductCard";
import { useGetWishlistQuery } from "../redux/services/productApi";
import { useAuthContext } from "../context/AuthContext";


const Wishlist = () => {

  const { userId } = useAuthContext();
  const { data: wishlistfromBackend, isLoading, error } = useGetWishlistQuery( undefined,{skip:!userId});

  const localWishlist = useSelector(selectLocalWishlist);
  const wishlist = userId ? wishlistfromBackend : localWishlist
  return (
    <div className="flex flex-wrap gap-3">
      {Array.isArray(wishlist) && wishlist.length > 0 ? (
        wishlist.map((item) => (
          <ProductCard key={item?._id} {...item} />
        ))
      ) : (
        <div className="bg-red-100 text-center p-5 flex items-center justify-center  h-screen w-full"><div className="w-40">Wishlist bosdur</div></div>
      )}

    </div>
  )
}
export default Wishlist