// import React, { useState, useEffect } from "react";
// import Backend from "../Backend";
// import "./MoviesLanes.css";
// import MovieLaneItem from "./MovieLaneItem";

// const base_url = "https://image.tmdb.org/t/p/original/";

// function MoviesLanes({ title, genre, isLargeRow }) {
//   const [movies, setMovies] = useState(null);
//   const [movie, setMovie] = useState(null);
//   const [index, setIndex] = useState(null);
//   const [render, setRender] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await Backend.fetchGenres(genre);

//       setMovies(response.data);
//     }
//     fetchData();
//   }, [genre]);


//   const onMouseEnter = (e) => {
//     setRender(true);
//     setIndex(e.target.id);
//     setMovie(movies[index]);
//     console.log(movie);
  
//   };
//   const offRender = () => {
//     setRender(false);
//   };

 


//   return (
//     <div className="movieslane">
//       <h2>{title}</h2>
//       <div className="movies_posters">
//         {movies?.map((movie, index) => {
//           return (
//             <> 
//                 <img
//                   id={index}
//                   key={movie.id}
//                   onMouseEnter={onMouseEnter}
//                   onMouseLeave={offRender}
//                   className={`movies_poster ${
//                     isLargeRow && "movies_posterLarge"
//                   }`}
//                   src={
//                     isLargeRow
//                     ? `${base_url}${movie.posterPath}`
//                     : movie.movieThumbUrl
//                   }
//                   alt={movie.title}
//                   />
               
//             </>
//           );
//         })}
//       </div>
//         {render ? <MovieLaneItem movie={movie} /> : ""}

//     </div>
//   ); 
// }

// export default MoviesLanes;
