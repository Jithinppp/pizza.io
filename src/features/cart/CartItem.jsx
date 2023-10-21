import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;
  return (
    <li className="py-2">
      <p className="text-lg font-medium">
        {quantity} &times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="secondary">Delete</Button>
      </div>
    </li>
  );
}
export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object,
};
