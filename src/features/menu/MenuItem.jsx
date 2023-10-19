import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, soldOut, ingredients, imageUrl } = pizza;
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
            <span>{unitPrice}</span>
          ) : (
            <span className="font-medium capitalize">sold out</span>
          )}
          <Button secondary={true}>Add to cart</Button>
        </div>
      </div>
    </li>
  );
}
export default MenuItem;

MenuItem.propTypes = {
  pizza: PropTypes.object,
};
