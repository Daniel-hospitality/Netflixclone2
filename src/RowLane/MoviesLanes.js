import React, { useState, useRef, useEffect } from "react";
import Backend from "../Backend";
import "./MoviesLanes.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function MoviesLanes({ title, genre, isLargeRow }) {
  const [movies, setMovies] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchGenres(genre);

      setMovies(response.data);
    }
    fetchData();
  }, []);
  console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters#?v=46646454546
      autoplay: 0,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="movieslane">
      <h2>{title}</h2>
      <div className="movies_posters">
        {movies?.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`movies_poster ${isLargeRow && "movies_posterLarge"}`}
              src={
                isLargeRow
                  ? `${base_url}${movie.posterPath}`
                  : movie.movieThumbUrl
              }
              alt={movie.title}
            />
          );
        })}
      </div>
      <div className="movieslane_info">
        {movies?.map((info) => {
          return (
            <div>
              <div className="movies_title">
                <h1>{info.title}</h1>
              </div>
              <div className="movies_overview">
                <p>{info.overview}</p>
              </div>
              <div className="movies_runtime">
                <p>Runtime: {info.runtime}</p>
              </div>{" "}
              <div className="movies_director">
                <p>Director: {info.director}</p>
              </div>{" "}
              <div className="movies_genres">
                <p>
                  {info.genres.map((id) => (
                    <li>{id.name}</li>
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default MoviesLanes;
