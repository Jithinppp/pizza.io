import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurants";
import Button from "../../ui/Button";

// phone validation
const isValidPhone = (phoneNumber) => /^[6-9]\d{9}$/.test(phoneNumber);

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

  // if the action not completed the formData can be accessed from a hook called useActionsData()
  // the returned value from the action because we not redirected because errors object there
  const formData = useActionData();

  return (
    <div className="m-auto sm:max-w-[90vw]">
      {/* we can use POST,PATCH,DELETE not GET actions happens only from r-r-d form with these methods
      we can use action="/order/new" but r-r-d does for us automatically
       */}
      <Form method="POST">
        <div className="my-2">
          <label htmlFor="customer" className="mb-3 text-lg">
            First name
          </label>
          <input name="customer" required className="input" />
        </div>
        <div className="my-2 ">
          <label htmlFor="phone" className="mb-3 text-lg">
            Phone number
          </label>
          <input name="phone" required className="input" />
          {formData?.phone && (
            <p className="rounded-md bg-red-50 p-1 text-xs text-red-700 ">
              {formData.phone}
            </p>
          )}
        </div>
        <div className="my-2">
          <label className="mb-3 text-lg" htmlFor="address">
            Address
          </label>
          <input name="address" required className="input" />
        </div>
        <div className="my-4 flex items-center space-x-3 ">
          <input
            type="checkbox"
            name="priority"
            className="h-6 w-6 accent-yellow-400 transition-all focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label className="text-lg" htmlFor="priority">
            Do you want priority?
          </label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />
        <Button disabled={isSubmitting} type="primary">
          {isSubmitting ? "Placing order" : "Order now"}
        </Button>
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
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Please give a valid phone number.";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  // if no errors then create new order and takes to that route
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
