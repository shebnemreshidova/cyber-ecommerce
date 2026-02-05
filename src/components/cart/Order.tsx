import { useGetCartItemsQuery } from "../../redux/services/cartApi";
const Order = () => {
    const { data: cartItems } = useGetCartItemsQuery();
    return (
        <>
            {Array.isArray(cartItems) && cartItems.length > 0 && (
                <div className="lg:col-span-1 order-1 lg:order-2">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:sticky lg:top-4">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Order Summary
                        </h2>
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                            <div className="flex justify-between text-xs sm:text-sm text-gray-700">
                                <span>Subtotal</span>
                                <span className="font-semibold text-gray-900">
                                    120
                                </span>
                            </div>
                            <div className="flex justify-between text-xs sm:text-sm text-gray-700">
                                <span>Estimated Tax</span>
                                <span className="font-semibold text-gray-900">
                                    0
                                </span>
                            </div>
                            <div className="flex justify-between text-xs sm:text-sm text-gray-700">
                                <span>Estimated shipping & Handling</span>
                                <span className="font-semibold text-gray-900">
                                    0
                                </span>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-4 sm:mb-6">
                            <div className="flex justify-between text-base sm:text-lg">
                                <span className="font-bold text-gray-900">Total</span>
                                <span className="font-bold text-gray-900">
                                    300
                                </span>
                            </div>
                        </div>

                        <button className="w-full bg-black text-white py-2 sm:py-3 text-sm sm:text-base rounded-lg font-bold hover:bg-gray-900 transition-colors">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Order