import { Outlet, useNavigation } from "react-router-dom";
// uis
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const { state } = useNavigation();
  return (
    <div>
      <Header />
      <main className=" min-h-[80vh] mx-3">
        {/* to render all nested child components */}
        {state === "idle" ? <Outlet /> : <Loader />}
      </main>
      <CartOverview />
    </div>
  );
}
export default AppLayout;
