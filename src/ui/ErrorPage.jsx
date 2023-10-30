import PropTypes from "prop-types";
import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="mt-5 flex flex-col gap-4">
      <div className="space-x-4 bg-red-100 p-2 ">
        <span className="font-semibold text-red-500">Ops error occurred</span>
        <span className="rounded text-red-500 ">
          {error?.data || error?.message}
        </span>
      </div>
      <button
        className="w-max border-b-2 border-blue-500 text-blue-500"
        onClick={() => navigate(-1)}
      >
        go back
      </button>
    </div>
  );
}
export default ErrorPage;

ErrorPage.propTypes = {
  error: PropTypes.string,
};
