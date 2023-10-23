

const Search = ({handleChangeValue}) => {
  return (
    <input
    onChange={handleChangeValue}
    className="border border-green-500 p-2"
    type="text"
    placeholder="Enter a movie name"
  />       
  );
};

export default Search;
