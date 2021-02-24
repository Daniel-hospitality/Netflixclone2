import React, { useState, useEffect } from "react";
import "./MovieLaneItem.css";
import ReactPlayer from "react-player/youtube";

function MovieLaneItem({movies}) {
  return (
    <div className="movie_lane_itemc">
      {movies?.map((movie) => {
        
        return (
          <>
            {/* <img key={movie.id} /> */}
            <div key={movie.id} className="movies_titlec">
            
              <h1 id={movie.id}>{movie.title}</h1>
            </div>
            <div className="movies_genres">
              <p>
                {movie.genres.map((id) => (
                  <li>{id.name}</li>
                  ))}
              </p>
            </div>
                  {/* {console.log(movie.id)} */}
          </>
        );
      })}
    </div>
  );
}

export default MovieLaneItem;

// function MovieLaneItem({ movies }) {
//   console.log({ movies });

//   return (
//     <div className="movie_lane_itemc">
//       <div className="playerWrapper">
//         <ReactPlayer
//           url={`https://youtu.be/${props?.youtubeKey}`}
//           playing={true}
//           muted={true}
//           controls={false}
//           loop={true}
//           width="100%"
//           height="100%"
//         />
//       </div>
//       <div className="movies_titlec">
//         <h1>{movies.title}</h1>
//       </div>
//       <div className="movies_runtime">
//         <p>Runtime: {movies.runtime}</p>
//       </div>{" "}
//       <div className="movies_director">
//         <p>Director: {movies.director}</p>
//       </div>{" "}
//       <div className="movies_genres">
//         <p>
//           {movies.genres.map((id) => (
//             <li>{id.name}</li>
//           ))}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default MovieLaneItem;
