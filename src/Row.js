import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import RowMoreInfo from "./RowMoreInfo";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showMovie, setshowMovie] = useState(false);
  // const [render, setRender] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

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

  const toggleMovie = () => {
    setshowMovie(true);
  };
  const toggleOff = () => {
    setshowMovie(false);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
{/* {render ? <RowMoreInfo /> : ""} */}
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <>
              <img
                onMouseEnter={toggleMovie} 
                onMouseLeave={toggleOff}
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              <RowMoreInfo showMovie={showMovie} toggleMovie={toggleMovie} />
              {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
