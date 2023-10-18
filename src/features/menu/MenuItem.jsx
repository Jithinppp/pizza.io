import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, soldOut, ingredients, imageUrl } = pizza;
  return (
    <li>
      <img alt={name} src={imageUrl} />
      <div>
        <p>
          {name} {id}
        </p>
        <p>{ingredients.join(", ")}</p>
        <div>{!soldOut ? <span>{unitPrice}</span> : <p>sold out</p>}</div>
        <Link to={`/order/${id}`}>see more</Link>
      </div>
    </li>
  );
}
export default MenuItem;

MenuItem.propTypes = {
  pizza: PropTypes.object,
};
