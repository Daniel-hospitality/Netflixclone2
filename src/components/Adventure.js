import React, { useState, useEffect } from "react";
import Backend from "../Backend";
import "./adventure.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, genre, isLargeRow }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchGenres(genre);
      setMovies(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies?.map(movie => {
          return <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={
                isLargeRow ? `${base_url}${movie.posterPath}` : movie.movieThumbUrl}
              alt={movie.name} />
        })}
      </div>
      
    </div>

  );
}

export default Row;
