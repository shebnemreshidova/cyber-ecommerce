import { Heart } from "lucide-react";
import { BsHeartFill } from "react-icons/bs";
import Button from "../common/Button";
import { useWishlist } from "../../hooks/useWishlist";

interface ProductCardProps {
  _id: string;
  image?: string | undefined;
  name: string;
  price: number;
  description: string;
  order: number;
}
const ProductCard: React.FC<ProductCardProps> = (product: ProductCardProps) => {
  const { _id, image, name, price } = product;
  const { toggleWishlist, isInWishList } = useWishlist();
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-64 relative">
      <button onClick={() => 
        toggleWishlist(product)} 
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer hover:scale-110 transition-transform">
        {isInWishList(_id) ? (
          <BsHeartFill size={24} className="text-red-500" />
        ) : (
          <Heart size={24} />
        )}
      </button>
      <img
        src={`http://localhost:5000/uploads/${image}`}
        alt={name}
        className="w-40 h-40 object-contain mb-4"
      />
      <h3 className="text-center font-medium text-gray-800 mb-2">{name}</h3>
      <p className="text-lg font-semibold mb-4">${price}</p>
      <Button
        variant="primary"
      >
        Buy Now
      </Button>
    </div>
  );
};

export default ProductCard;
