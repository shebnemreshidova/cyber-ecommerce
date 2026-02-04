import { Heart } from "lucide-react";
import { BsCartDash, BsHeartFill } from "react-icons/bs";
import Button from "../common/Button";
import { useWishlist } from "../../hooks/useWishlist";
import { useAddCartMutation } from "../../redux/services/cartApi";
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ProductCardProps {
  _id: string;
  image?: string;
  name: string;
  price: number;
  description: string;
  order: number;
}

const ProductCard: React.FC<ProductCardProps> = (product) => {
  const { _id, image, name, price } = product;
  const { isInWishlist, handleToggleWishlist } = useWishlist();
  const [addCart] = useAddCartMutation();
  const { userId } = useAuthContext();
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(_id));

  const handleAddCard = (_id: string) => {
    userId ? addCart({ productId: _id }) : navigate("/auth/login")
  }

  const handleWishlist = (prod: typeof product) => {
    handleToggleWishlist(prod);
    setIsWishlisted(!isWishlisted);
  }

  return (
    <div className="rounded-xl bg-gray-50 overflow-hidden h-full flex flex-col w-full sm:w-56 md:w-64 group">

      <div className="relative overflow-hidden h-40 sm:h-48 md:h-56 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-3 sm:p-4"
          loading="lazy"
        />
        <button
          onClick={() => handleWishlist(product)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
        >
          {isWishlisted ? (
            <BsHeartFill size={20} className="text-red-500" />
          ) : (
            <Heart size={20} className="text-gray-400 group-hover:text-red-400" />
          )}
        </button>
      </div>

      <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-3 flex-grow">
        <h3 className="text-center text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2 min-h-8 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
        <p className="text-center text-base sm:text-lg md:text-xl font-bold text-gray-900">
          ${price}
        </p>  
        <Button
          variant="primary"
          onClick={() => handleAddCard(_id)}
          className="w-full mt-auto"
        >
          <BsCartDash size={18} />
          <span className="hidden sm:inline">Add to cart</span>
          <span className="sm:hidden">Add</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;