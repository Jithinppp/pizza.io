import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
// uis
import Header from "./Header";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice";
import { selectUser } from "../features/user/userSlice";

function AppLayout() {
  const { state } = useNavigation();
  const location = useLocation();
  const cartItems = useSelector(selectCartItems);
  const user = useSelector(selectUser);

  const isLoading = state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <div>
        <ul className="my-3 flex items-center justify-evenly gap-4 font-semibold text-stone-800 sm:hidden">
          {!user.uid && (
            <li>
              <Link
                className=" transition-all duration-100 ease-in hover:border-b-2 hover:border-slate-500"
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
              className=" transition-all duration-100 ease-in hover:border-b-2 hover:border-slate-500"
              to={"/menu"}
            >
              Menu
            </Link>
          </li>
        </ul>
      </div>
      <main className=" mx-3 min-h-[80vh]">
        {/* to render all nested child components */}
        <Outlet />
      </main>
    </div>
  );
}
export default AppLayout;
