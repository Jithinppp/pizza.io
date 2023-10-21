// libs
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// uis
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";
import User from "./features/user/User";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  // why createBrowserRouter -> new version of react-router-dom documentation
  // we can achieve data fetching/data loading with react-router-dom (eg:form-submissions,fetch)
  // its imperative approach
  {
    // act as a layout no need path aka layout route
    element: <AppLayout />,
    // error element if no route of loader errors if children has error it will bubble up
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        // loaders are new feature from r-r-d and it call the function asap when route loaded
        // and the return value of callback will goes to the hook called useLoaderData()
        // render as fetch strategy alternative to fetch in useEffects
        // loader must be async function
        loader: menuLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;

// user can see all the menu items
// user can add items to cart
// user can sign-in with gmail
// user can sign-out
// user can checkout the cart if only authenticated
// user can see all the prev and current orders if authenticated
