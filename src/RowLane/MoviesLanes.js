import React, { useState, useEffect } from "react";
import Backend from "../Backend";
import "./MoviesLanes.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
import MovieLaneItem from "./MovieLaneItem";

const base_url = "https://image.tmdb.org/t/p/original/";

function MoviesLanes({ title, genre, isLargeRow }) {
  const [movies, setMovies] = useState(null);
  // const [trailerUrl, setTrailerUrl] = useState("");
  const [render, setRender] = useState(false);
  // const [infoo, setInfoo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchGenres(genre);

      setMovies(response.data);
    }
    fetchData();
  }, [genre]);
  // console.log(movies);
  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     //https://developers.google.com/youtube/player_parameters#?v=46646454546
  //     autoplay: 0,
  //   },
  // };

  const onRender = () => {
    setRender(true);
    setMovies(movies);
  
  };
  const offRender = () => {
    setRender(false);
  };

  // function setInformation(movie) {
  //   setMovies(movie);
  // }


  return (
    <div className="movieslane">
      <h2>{title}</h2>
      <div className="movies_posters">
        {movies?.map((movie, index) => {
          return (
            <> 
                <img
                  id={index}
                  key={movie.id}
                  onMouseEnter={onRender}
                  onMouseLeave={offRender}
                  className={`movies_poster ${
                    isLargeRow && "movies_posterLarge"
                  }`}
                  src={
                    isLargeRow
                    ? `${base_url}${movie.posterPath}`
                    : movie.movieThumbUrl
                  }
                  alt={movie.title}
                  />
                  {/* {console.log("movie = " + movie.id)} */}
               
            </>
          );
        })}
      </div>
        {render ? <MovieLaneItem id={"index"} movies={movies} /> : ""}
    </div>
  ); 
}

export default MoviesLanes;
