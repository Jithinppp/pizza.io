import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-black text-white">
      <p>21 pizzas</p>
      <p>144$ </p>
      <Link to={"/cart"}>Open cart</Link>
    </div>
  );
}
export default CartOverview;
