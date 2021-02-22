import React from "react";
import "./MoviesLanes.css";
import ReactPlayer from "react-player/youtube";


function MovieLaneItem(props, info) {
  console.log(info);
  return (
    <div className="movie_lane_itemc">
      {/* <div className="playerWrapper" >
              <ReactPlayer
                url={`https://youtu.be/${props?.youtubeKey}`}
                playing={true}
                muted={true}
                controls={false}
                loop={true}
                width="100%"
                height="100%"
                />
               
      </div> */}
  
      <div className="movies_title">
        <h1>{props.title}</h1>
      </div>
      <div className="movies_runtime">
        <p>Runtime: {info.runtime}</p>
      </div>{" "}
      <div className="movies_director">
        <p>Director: {info.director}</p>
      </div>{" "}
      <div className="movies_genres">
        {/* <p>
            {info.genres.map((id) => (
              <li>{id.name}</li>
            ))}
          </p> */}
      </div>
    </div>
  );
}

export default MovieLaneItem;
