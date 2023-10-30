import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        required
        placeholder="Search order :ID"
        className=" w-32 rounded-full bg-yellow-100 px-3 py-2 outline-none transition-all duration-300 focus:w-36 focus:opacity-80 focus:outline-none focus:ring focus:ring-yellow-500 sm:w-60 sm:focus:w-72"
      />
      <input type="submit" hidden />
    </form>
  );
}
export default SearchOrder;
