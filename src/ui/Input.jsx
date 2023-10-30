import PropTypes from "prop-types";
function Input({ type, placeholder, onChange, required = true }) {
  return (
    <input
      required={required}
      className="  rounded-full border-2 bg-white px-3 py-2 transition-all duration-300 focus:opacity-80 focus:outline-none focus:ring focus:ring-slate-500 sm:w-80"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
export default Input;

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
