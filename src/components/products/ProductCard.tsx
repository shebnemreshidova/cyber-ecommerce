import { Heart } from "lucide-react";
import { BsCartDash, BsHeartFill } from "react-icons/bs";
import Button from "../common/Button";
import { useWishlist } from "../../hooks/useWishlist";
import { useAddCartMutation } from "../../redux/services/cartApi";
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";

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

  const handleAddCard = (_id: string) => {
    userId ? () => addCart({ productId: _id }) : navigate("/auth/login")
  }
  return (

    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-64 relative">
      <button
        onClick={() => handleToggleWishlist(product)}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 hover:scale-110 transition-transform"
      >
        {isInWishlist(_id) ? (
          <BsHeartFill size={24} className="text-red-500" />
        ) : (
          <Heart size={24} />
        )}
      </button>

      <img
        src={image}
        alt={name}
        className="w-40 h-40 object-contain mb-4"
      />

      <h3 className="text-center font-medium text-gray-800 mb-2">{name}</h3>
      <p className="text-lg font-semibold mb-4">${price}</p>
      {/* add card edende addded cart olsun amma yene de add ede biler */}
      <Button variant="primary" onClick={() => handleAddCard(_id)}>
        <BsCartDash />
        Add to card</Button>
    </div>
  );
};

export default ProductCard;
