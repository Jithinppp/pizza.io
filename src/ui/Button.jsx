import PropTypes from "prop-types";

function Button({ disabled, children, onClick, type }) {
  const color = {
    yellow: " bg-yellow-400 hover:bg-yellow-300 focus:ring-yellow-200 ",
    gray: " bg-white border-2 border-gray-400 focus:ring-gray-200 hover:bg-gray-100",
  };
  const base =
    "transition:all inline-block rounded-full  text-sm text-stone-800 outline-none duration-300  focus:outline-none focus:ring  focus:ring-offset-1 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 uppercase font-semibold " + color.yellow,
    secondary: base + " px-3 py-2 capitalize " + color.yellow,
    gray: base + " px-4 py-3 uppercase font-semibold " + color.gray,
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className={styles[type]}
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
  type: PropTypes.string.isRequired,
};
