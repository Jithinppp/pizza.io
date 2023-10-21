import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;
  return (
    <li className="py-2 sm:flex sm:justify-between">
      <p className="text-lg font-medium">
        {quantity} &times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}
export default OrderItem;

OrderItem.propTypes = {
  item: PropTypes.object,
};
