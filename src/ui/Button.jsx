import PropTypes from "prop-types";
function Button({ disabled, children, onClick, secondary }) {
  const styling = secondary
    ? "px-3 py-2 capitalize"
    : "px-4 py-3 uppercase font-semibold ";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className={`transition:all inline-block rounded-full bg-yellow-400 text-sm ${styling}  text-stone-800 outline-none duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-1 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
export default Button;

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
};
