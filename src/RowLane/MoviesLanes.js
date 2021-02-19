import React, { useState, useEffect } from "react";
import Backend from "../Backend";
import "./RowLane.css";


const base_url = "https://image.tmdb.org/t/p/original/";


function MoviesLanes({title, genre, casts, isLargeRow}) {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        async function fetchData() {
          const response = await Backend.fetchGenres(genre);
        //   const response = await Backend.fetchCast(casts);

          setMovies(response.data);
        }
        fetchData();
    }, []);








    return (
        <div className="rowlane">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies?.map(movie => {
                    return <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={
                        isLargeRow ? `${base_url}${movie.posterPath}` : movie.movieThumbUrl
                    } alt={movie.name} />
                })}
            </div>
            
        </div>
    );
}

export default MoviesLanes;

