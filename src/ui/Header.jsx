import { Link, useLocation } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

function Header() {
  const location = useLocation();
  const { cartItems } = useSelector((state) => state.cart);
  const user = useSelector(selectUser);

  return (
    <header className="flex items-center justify-between bg-yellow-400 p-2">
      <Link
        to={"/"}
        className="text-xl font-light tracking-tighter text-stone-800  "
      >
        Pizza.io
      </Link>
      <SearchOrder />
      <ul className="hidden gap-4 font-semibold text-stone-800 sm:flex">
        {!user.uid && (
          <li>
            <Link
              className=" transition-all duration-200 ease-in hover:border-b-2 hover:border-slate-500"
              to={"/user"}
            >
              User
            </Link>
          </li>
        )}
        {location.pathname !== "/cart" && (
          <li>
            <Link
              className=" transition-all duration-100 ease-in hover:border-b-2 hover:border-slate-500"
              to={"/cart"}
            >
              Cart {cartItems.length}
            </Link>
          </li>
        )}
        <li>
          <Link
            className=" transition-all duration-200 ease-in hover:border-b-2 hover:border-slate-500"
            to={"/menu"}
          >
            Menu
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
