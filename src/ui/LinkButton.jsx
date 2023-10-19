import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LinkButton({ children, path }) {
  return <Link to={path}>{children}</Link>;
}
export default LinkButton;

LinkButton.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
};
