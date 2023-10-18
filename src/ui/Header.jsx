import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between m-2">
      <Link to={"/"}>Pizza delivery</Link>
      <ul className="flex items-center gap-3">
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
