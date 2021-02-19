import React, { useState, useRef, useEffect } from "react";
import Backend from "../Backend";
import "./RowLane.css";
import Player from "../components/Player";


const base_url = "https://image.tmdb.org/t/p/original/";


function MoviesLanes({title, genre, casts, isLargeRow}) {
    const [movies, setMovies] = useState(null);
    const player = useRef(null);

    useEffect(() => {
        async function fetchData() {
          const response = await Backend.fetchGenres(genre);
        //   const response = await Backend.fetchCast(casts);

          setMovies(response.data);
        }
        fetchData();
    }, []);








    return (
        <div className="movieslane">
            <h2>{title}</h2>
            <div className="movies_posters">
                {movies?.map(movie => {
                    return <img
                    key={movie.id}
                    className={`movies_poster ${isLargeRow && "movies_posterLarge"}`}
                    src={
                        isLargeRow ? `${base_url}${movie.posterPath}` : movie.movieThumbUrl
                    } alt={movie.name} />
                })}
            </div>
            <div className="moviesplayer-wrapper">
              <Player ref={player} movie={movies}/>
            </div>
            
        </div>
        
    );
}

export default MoviesLanes;

