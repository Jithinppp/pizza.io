import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems } from "./cartSlice";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 13,
//     name: "Vegetale",
//     quantity: 3,
//     unitPrice: 20,
//     totalPrice: 60,
//   },
//   {
//     pizzaId: 14,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 12,
//     totalPrice: 12,
//   },
// ];

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = "jithin";
  const cart = useSelector(selectCartItems);

  return (
    <div className="m-auto sm:max-w-[90vw]">
      <LinkButton path={"/menu"}> &larr; Back to menu</LinkButton>
      <h2 className="my-2 text-3xl font-medium tracking-tighter">
        Your cart {name}
      </h2>
      {cart.length <= 0 && (
        <p className="my-10 text-slate-400">Cart is empty 😀</p>
      )}
      <ul className=" gap-2 divide-y divide-stone-200 border-b">
        {cart.map((item, idx) => (
          <CartItem key={idx} item={item} />
        ))}
      </ul>
      <div className="mt-4 flex gap-3">
        <Button type="primary" onClick={() => navigate("/order/new")}>
          Order pizzas
        </Button>
        <Button onClick={() => dispatch(clearCart())} type="gray">
          Clear cart
        </Button>
      </div>
    </div>
  );
}
export default Cart;
