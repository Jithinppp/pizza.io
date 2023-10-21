import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 13,
    name: "Vegetale",
    quantity: 3,
    unitPrice: 20,
    totalPrice: 60,
  },
  {
    pizzaId: 14,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 12,
    totalPrice: 12,
  },
];

function Cart() {
  const navigate = useNavigate();
  const name = "jithin";
  const cart = fakeCart;
  return (
    <div className="m-auto sm:max-w-[90vw]">
      <LinkButton path={"/menu"}> &larr; Back to menu</LinkButton>
      <h2 className="my-2 text-3xl font-medium tracking-tighter">
        Your cart {name}
      </h2>
      <ul className=" gap-2 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.key} item={item} />
        ))}
      </ul>
      <div className="mt-4 flex gap-3">
        <Button type="primary" onClick={() => navigate("/order/new")}>
          Order pizzas
        </Button>
        <Button type="gray">Clear cart</Button>
      </div>
    </div>
  );
}
export default Cart;
