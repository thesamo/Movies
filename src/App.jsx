
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Search from "./components/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const URL = "http://localhost:3000/films";
  const categoriesURL = "http://localhost:3000/categories";

  const fetchMovies = async () => {
    const response = await axios.get(URL);
    setMovies(response.data);
  };

  const fetchCategories = async () => {
    const response = await axios.get(categoriesURL);
    setCategories(response.data);
  };

  useEffect(() => {
    fetchMovies();
    fetchCategories();
  }, []);

  const handleChangeValue = (e) =>{
    const value = e.target.value.trim();

    if(value){
      const filteredMovies = movies.filter(movie => {
        return movie.name.toLowerCase().includes(value.toLowerCase()) || parseFloat(movie.imdb) === parseFloat(value)
      });
  
      setMovies(filteredMovies);
    }else{
      fetchMovies()
    }

  }

  const handleCategoryFilter = (categoryID) => {
    setSelectedCategory(categoryID);
  };

  const showAllCategories = () => {
    setSelectedCategory(null);
  };

 

  let filteredMovies;

if (selectedCategory) {
  filteredMovies = movies.filter((movie) => movie.category_id === selectedCategory);
} else {
  filteredMovies = movies;
}
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto">
        <h1 className="text-8xl text-white">Movies</h1>
        <Search handleChangeValue = {handleChangeValue} />
        <div className="categories my-4 flex gap-2">
          <span
            onClick={showAllCategories}
            className={`bg-green-200 p-2 cursor-pointer ${
              selectedCategory === null ? "bg-green-400" : ""
            }`}
          >
            All Categories
          </span>
          {categories.map((category) => (
            <span
              key={category.ID}
              onClick={() => handleCategoryFilter(category.ID)}
              className={`bg-green-200 p-2 cursor-pointer ${
                category.ID === selectedCategory ? "bg-green-400" : ""
              }`}
            >
              {category.name}
            </span>
          ))}
        </div>
        <div className="cards gap-4 flex flex-wrap justify-evenly">
          {filteredMovies.map((movie) => (
            <Card key={movie.ID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
