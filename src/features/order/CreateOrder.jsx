import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurants";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 13,
    name: "Vegetale",
    quantity: 3,
    unitPrice: 20,
    totalPrice: 60,
  },
  {
    pizzaId: 14,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 12,
    totalPrice: 12,
  },
];
function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <h2>Form</h2>
      {/* we can use POST,PATCH,DELETE not GET actions happens only from r-r-d form with these methods
      we can use action="/order/new" but r-r-d does for us automatically
       */}
      <Form method="POST">
        <input placeholder="first name" name="customer" />
        <input placeholder="phone number" name="phone" />
        <input placeholder="address" name="address" />
        <div>
          <input type="checkbox" name="priority" />
          <label htmlFor="priority">you want priority</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "placing order" : "order"}
        </button>
      </Form>
    </div>
  );
}

// when form get submitted request intercepted and this async function will run or make the request(POST)
// bts it calls this action function when form submitted there for a request made
// the async function get a object arg with {params, request}
// the request contains the form data
// after making the request we need to take back to the desired route
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
