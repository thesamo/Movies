import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Card = ({ movie }) => {
  const [categories, setCategories] = useState([]);
  const categoriesURL = "http://localhost:3000/categories";

  const fetchCategories = async () => {
    const response = await axios.get(categoriesURL);
    setCategories(response.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const category = categories.find(
    (category) => category.id == movie.category_id
  );

  return (
    <div className="card w-52 border border-green-500 cursor-pointer">
      <img
        className="w-full"
        src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg"
        alt=""
      />
      <div className="text-center my-2">
        <p className="text-white">{category?.name}</p>
        <p className="text-white">{movie.name}</p>
        <span className="text-white">{movie.imdb}</span>
      </div>
    </div>
  );
};

export default Card;
