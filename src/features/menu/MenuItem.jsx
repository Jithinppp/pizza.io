import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, imageUrl, ingredients, name, soldOut, unitPrice } = pizza;
  const dispatch = useDispatch();
  return (
    <li className="flex space-x-3 py-2">
      <img
        alt={name}
        src={imageUrl}
        className={`h-28 bg-cover ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col justify-between">
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="font-light capitalize italic tracking-wider">
            {ingredients.join(", ")}
          </p>
        </div>
        <div className="flex items-center justify-between">
          {!soldOut ? (
            <span className="font-bold text-green-500">
              {formatCurrency(unitPrice)}
            </span>
          ) : (
            <span className="font-medium capitalize">sold out</span>
          )}
          <Button
            onClick={() =>
              dispatch(
                addItem({
                  id,
                  name,
                  quantity: 1,
                  unitPrice,
                  totalPrice: unitPrice,
                }),
              )
            }
            type="secondary"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}
export default MenuItem;

MenuItem.propTypes = {
  pizza: PropTypes.object,
};
