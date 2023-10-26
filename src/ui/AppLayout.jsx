import { Outlet, useNavigation } from "react-router-dom";
// uis
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { checkUserExist } from "../utils/firebase.utils";

function AppLayout() {
  const { state } = useNavigation();
  const [currentUser, setCurrentUser] = useState(null);

  const isLoading = state === "loading";

  useEffect(() => {
    // check current user exist or not
    const user = checkUserExist();
    // console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <main className=" mx-3 min-h-[80vh]">
        {/* to render all nested child components */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
export default AppLayout;
