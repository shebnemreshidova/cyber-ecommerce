import { HeartCrack } from "lucide-react";
import Button from "../common/Button";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  onBuy: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, onBuy }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-64 relative">
      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
        <HeartCrack />
      </button>
      <img
        src={`http://localhost:5000/uploads/${image}`}
        alt={name}
        className="w-40 h-40 object-contain mb-4"
      />
      <h3 className="text-center font-medium text-gray-800 mb-2">{name}</h3>

      <p className="text-lg font-semibold mb-4">${price}</p>

      <Button
        onClick={onBuy}
        variant="primary"
      >
        Buy Now
      </Button>
    </div>
  );
};

export default ProductCard;
