// libs
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurants";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
// uis
import OrderItem from "./OrderItem";

// TODO: only authenticated users can see this

function Order() {
  const orderData = useLoaderData();
  const {
    id,
    cart,
    status,
    estimatedDelivery,
    orderPrice,
    priority,
    priorityPrice,
  } = orderData;
  const estimatedDel = calcMinutesLeft(estimatedDelivery);
  return (
    <div className="m-auto sm:max-w-[90vw]">
      <div className="mt-7 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">
          Order <span className="underline">{id}</span> Status
        </h1>
        <div className="space-x-4">
          {priority && (
            <span className="py rounded-full bg-red-600 px-4 py-1 capitalize text-white">
              Priority
            </span>
          )}
          <span className="py rounded-full bg-green-600 px-4 py-1 capitalize text-white">
            {status}
          </span>
        </div>
      </div>

      <div className="mt-5 rounded-md bg-stone-200 p-5 text-lg sm:mt-10 sm:flex sm:justify-between">
        <p>
          {estimatedDel > 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
            : "Order should have arrived"}
        </p>
        <p className="font-medium">
          (Estimated delivery : {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="px-3">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id}></OrderItem>
        ))}
      </ul>

      <div className="mt-5 rounded-md bg-stone-200 p-5 ">
        <p>Price pizza : {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority : {formatCurrency(priorityPrice)}</p>}
        <p className="my-1 text-lg font-semibold ">
          Pay on delivery : {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

// loader
export const loader = async ({ params }) => {
  const data = await getOrder(params.orderId);
  return data;
  // return null;
};

export default Order;
