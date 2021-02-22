import React, { useState, useEffect } from "react";
import Backend from "../Backend";
import "./MoviesLanes.css";
import "./MM.css";

function MM({genre}) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchGenres(genre);

      setMovies(response.data);
    }
    fetchData();
  }, []);
  // console.log(movies);

  return (
    <div className="movieslane_info">
      <div className="movieslane_infocard">
        {movies?.map((movie) => {
          return (
            <div key={movie.id}>
              <div className="movies_title">
                <h1>{movie.title}</h1>
              </div>
              <div className="movies_overview">
                <p>{movie.overview}</p>
              </div>
              <div className="movies_runtime">
                <p>Runtime: {movie.runtime}</p>
              </div>{" "}
              <div className="movies_director">
                <p>Director: {movie.director}</p>
              </div>{" "}
              <div className="movies_genres">
                <p>
                  {movie.genres.map((id) => (
                    <li>{id.name}</li>
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MM;
