import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const URL = "http://localhost:3000/films";

  const fetchMovie = async (id) => {
    const response = await axios.get(URL + "/" + id);
    setMovie(response.data);
  };

  useEffect(() => {
    fetchMovie(id);
  }, []);

  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <img
          className="w-96 "
          src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg"
          alt=""
        />
        <span>{movie?.name}</span>
        <span>{movie?.desc}</span>
        <span>{movie?.imdb}</span>
      </div>
    </div>
  );
};

export default MovieDetail;
