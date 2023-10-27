import PropTypes from "prop-types";
import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <p>Ops error occurred</p>
      <p>{error?.data || error?.message}</p>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
}
export default ErrorPage;

ErrorPage.propTypes = {
  error: PropTypes.string,
};
