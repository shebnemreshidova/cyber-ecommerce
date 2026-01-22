import ProductCard from "../components/products/ProductCard";
import { useWishlist } from "../hooks/useWishlist";

const Wishlist = () => {
  const { wishlistItems } = useWishlist();
  return (
    <div className="flex flex-wrap gap-3">
      {
        wishlistItems?.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
    </div>
  )
}

export default Wishlist