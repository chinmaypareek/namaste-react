import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white rounded-lg p-2 mt-4"
          onClick={handleClearCart}
        >
          Clear Cart🧹
        </button>
        {cartItems.length === 0 ? (
          <>
            <h1 className="mt-4 text-lg">Your cart is empty.</h1>
            <br />
            <h2>You can go to home page to view more restaurants.</h2>
          </>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
