function Input({ type, placeholder, onChange }) {
  return (
    <input
      className="  rounded-full border-2 bg-white px-3 py-2 transition-all duration-300 focus:opacity-80 focus:outline-none focus:ring focus:ring-slate-500 sm:w-80"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
export default Input;
