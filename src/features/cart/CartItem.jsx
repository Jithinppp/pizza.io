import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  return (
    <li className="py-2">
      <p className="text-lg font-medium">
        {quantity} &times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="secondary" onClick={() => dispatch(deleteItem(item))}>
          Delete
        </Button>
      </div>
    </li>
  );
}
export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object,
};
