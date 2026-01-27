import { Delete } from "lucide-react";
import { useAddCartMutation, useDecreaseCountMutation, useGetCartItemsQuery, useRemoveCartMutation } from "../redux/services/cartApi"

const Cart = () => {
  const { data: cartItems } = useGetCartItemsQuery();
  const [addCart] = useAddCartMutation();
  const [removeCart] = useRemoveCartMutation();
  const [decreaseCount] = useDecreaseCountMutation();

  return (
    <div className="p-10">
      <div className="text-4xl mb-5">Shopping Cart</div>
      <div className="flex gap-5">
        <div>
          {Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="flex gap-4  py-3 border-b border-gray-400">
                <div className="w-[90px] h-[90px]"><img src={`http://localhost:5000/uploads/${item.product.image}`} alt={item.product.name} /></div>
                <div>{item.product.name}</div>
                <div>
                  <button onClick={()=>decreaseCount({productId:item.product._id})}> -</button>
                  <div>{item.quantity}</div>
                  <button onClick={()=>addCart({productId:item.product._id})}>+</button>
                </div>
                <div>{item.product.price}</div>
                <button onClick={()=>removeCart({productId:item.product._id})}><Delete /></button>
              </div>
            ))
          ) :
            <div>Cart is empty</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Cart