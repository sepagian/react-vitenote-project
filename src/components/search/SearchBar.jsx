import { MdOutlineSearch } from "react-icons/md";
import { PropTypes } from "prop-types";
const SearchBar = ({ onSearchInput }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onSearchInput(value);
  };
  return (
    <div className="form-control my-2 flex flex-row items-center rounded-lg border border-solid bg-inherit px-4 py-1">
      <label htmlFor="search">
        <MdOutlineSearch size={32} />
      </label>
      <input
        type="text"
        placeholder="Search notes"
        name="search"
        id="search"
        onChange={handleInputChange}
        className="input input-ghost w-full bg-inherit focus:border-none focus:bg-inherit focus:outline-none"
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearchInput: PropTypes.func,
};
export default SearchBar;
