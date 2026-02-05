import Order from "../components/cart/Order";
import ShoppingCart from "../components/cart/ShoppingCart";
import Breadcrumb from "../components/common/Breadcrumb";
const Cart = () => {
  return (
    <div className="px-3 sm:px-4 md:px-8 lg:px-16 xl:px-20 py-4 sm:py-8">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Shopping Cart" },
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

        <ShoppingCart />
        <Order />
      </div>
    </div>
  );
};

export default Cart;