import { Trash2 } from "lucide-react";
import { useAddToCartMutation, useDecreaseCountMutation, useGetCartItemsQuery, useRemoveCartMutation } from "../../redux/services/cartApi";

const ShoppingCart = () => {
  const { data: cartItems } = useGetCartItemsQuery();
  const [addToCart] = useAddToCartMutation();
  const [removeCart] = useRemoveCartMutation();
  const [decreaseCount] = useDecreaseCountMutation();
  return (
          <div className="lg:col-span-2 order-2 lg:order-1">
            {Array.isArray(cartItems) && cartItems.length > 0 ? (
              <div className="space-y-0">
                {cartItems.map((item, index) => (
                  <div
                    key={item.product._id || index}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 py-4 border-b border-gray-300 last:border-b-0"
                  >
                    <div className="w-full sm:w-24 sm:h-24 flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-32 sm:h-full object-contain"
                      />
                    </div>


                    <div className="flex-grow flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">

                      <div className="flex-grow min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base break-words">
                          {item.product.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                          #{item.product._id}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 bg-gray-100 px-2 sm:px-3 py-2 rounded w-fit">
                        <button
                          onClick={() =>
                            decreaseCount({ productId: item.product._id })
                          }
                          className="text-gray-700 font-bold hover:text-gray-900 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-sm sm:text-base"
                        >
                          −
                        </button>
                        <span className="text-gray-900 font-medium w-6 sm:w-8 text-center text-sm sm:text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            addToCart({ productId: item.product._id })
                          }
                          className="text-gray-700 font-bold hover:text-gray-900 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-sm sm:text-base"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center justify-between sm:gap-2">
                        <div className="text-base sm:text-lg font-bold text-gray-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>

                        <button
                          onClick={() =>
                            removeCart({ productId: item.product._id })
                          }
                          className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0 ml-2"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} className="sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Your cart is empty</p>
              </div>
            )}
          </div>
  )
}

export default ShoppingCart