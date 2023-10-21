import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LinkButton({ children, path }) {
  return (
    <Link className="my-2 inline-block text-blue-700" to={path}>
      {children}
    </Link>
  );
}
export default LinkButton;

LinkButton.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
};
