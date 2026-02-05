import { Heart, ShoppingCart, Truck, Home, CheckCircle } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import { useWishlist } from "../hooks/useWishlist";
import { useGetDetailsQuery } from "../redux/services/productApi";
import { useAuthContext } from "../context/AuthContext";
import Button from "../components/common/Button";
import { useAddToCartMutation } from "../redux/services/cartApi";
import ProductDetailsSkeleton from "../components/common/ProductDetailSkeleton";
const ProductDetails = () => {
  const { id } = useParams();
  
  if (!id) return <Navigate to="/" />;

  const { isInWishlist, handleToggleWishlist } = useWishlist();
  const navigate = useNavigate();
  const { userId } = useAuthContext();
  const [addToCart] = useAddToCartMutation();
  const { data: product, isLoading, isError } = useGetDetailsQuery(
    { id },
    { skip: !id }
  );

  const handleAddCart = (productId: string) => {
    if (!userId) {
      navigate("/auth/login");
      return;
    }
    addToCart({ productId });
  };

  if (isLoading) return <ProductDetailsSkeleton />;

  if (isError || !product) return <>Product not found</>;

  return (
     <div className="px-3 sm:px-4 md:px-8 lg:px-16 xl:px-20 py-4 sm:py-8">

      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Product Details" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-6">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full h-auto object-contain animate-in fade-in duration-500"
            />
          </div>

          <div className="flex flex-col space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                ${product.price}
              </p>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className='flex-1'
                variant='secondary'
                onClick={() => handleToggleWishlist(product)}
              >
                <Heart
                  className={`w-5 h-5 ${isInWishlist(id) ? "fill-red-500 text-red-500" : ""
                    }`}
                />
                {isInWishlist(id) ? "Favorited" : "Add to Wishlist"}
              </Button>
              <Button
                onClick={() => handleAddCart(id)}
                className="flex-1"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Truck className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Free Delivery</p>
                <p className="text-xs text-gray-600">1-2 days</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">In Stock</p>
                <p className="text-xs text-gray-600">Today</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <CheckCircle className="w-6 h-6 text-purple-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Guaranteed</p>
                <p className="text-xs text-gray-600">1 year</p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <Home className="w-6 h-6 text-yellow-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Safe Return</p>
                <p className="text-xs text-gray-600">30 days</p>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Product ID: <span className="font-mono font-semibold text-gray-700">{product._id}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;