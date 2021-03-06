import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="search monsters"
      value={props.searchField}
      onChange={props.handleChange}
    />
  );
};

export default SearchBox;
