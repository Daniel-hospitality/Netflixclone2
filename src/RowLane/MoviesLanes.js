import React, { useState, useRef, useEffect } from "react";
import Backend from "../Backend";
import "./MoviesLanes.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import MovieLaneItem from "./MovieLaneItem";

const base_url = "https://image.tmdb.org/t/p/original/";

function MoviesLanes({ title, genre, isLargeRow }) {
  const [movies, setMovies] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [render, setRender] = useState(false);
  const [infoo, setInfoo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchGenres(genre);

      setMovies(response.data);
    }
    fetchData();
  }, []);
  // console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters#?v=46646454546
      autoplay: 0,
    },
  };

  const onRender = () => {
    setRender(true);
  };
  const offRender = () => {
    setRender(false);
  };

  function setInformation(itemProp) {
    setInfoo(itemProp);
  }

  //  console.log(infoo);
  return (
    <div className="movieslane">
      <h2>{title}</h2>
      <div className="movies_posters">
        {movies?.map((movie) => {
          return (
            <img
            key={movie.id}
            onMouseEnter={onRender}
            onMouseLeave={offRender}
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
          {render ? <MovieLaneItem info={infoo} /> : ""}
      {console.log(infoo)}

      {/* <div className="movieslane_info">
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
      </div> */}

    </div>
  );
}

export default MoviesLanes;
