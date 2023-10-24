const Search = ({handleChangeValue}) => {
  return (
    <input
    onChange={handleChangeValue}
    className="border w-full border-green-500 p-2 my-5 bg-transparent outline-none text-white	"
    type="text"
    placeholder="Enter a movie name"
  />       
  );
};

export default Search;
