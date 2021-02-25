import React from "react";
import "./MovieLaneItem.css";
import ReactPlayer from "react-player/youtube";

function MovieLaneItem(props) {
  console.log(props);
  return (
    <div className="movie_lane_itemc">
      <div className="playerWrapper">
        <ReactPlayer
          url={`https://youtu.be/${props.movie?.youtubeKey}`}
          playing={true}
          muted={true}
          controls={false}
          loop={true}
          width="50%"
          height="50%"
        />
      </div>
      <div className="movies_genres">
        <p>
          {props.movie?.genres.map((id) => (
            <li>{id.name}</li>
          ))}
        </p>
      </div>
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
//           url={`https://youtu.be/${props.movie?.youtubeKey}`}
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
