import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurants";

function Order() {
  const orderData = useLoaderData();
  const {
    id,
    status,
    customer,
    estimatedDelivery,
    orderPrice,
    priority,
    priorityPrice,
  } = orderData;
  return (
    <div>
      <p>Status: {status}</p>
      <p>customer : {customer}</p>
      <p>Price : {orderPrice}</p>
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
