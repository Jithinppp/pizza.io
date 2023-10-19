import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-400 p-2">
      <Link
        to={"/"}
        className="text-xl font-light tracking-tighter text-stone-800  "
      >
        Pizza.io
      </Link>
      <SearchOrder />
      <ul className="hidden gap-4 text-stone-800 sm:flex">
        <li>
          <Link to={"/user"}>User</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
