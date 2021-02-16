import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
// import LineIcon from "react-lineicons";

function RowMoreInfo(props) {
  const [showMovie, setshowMovie] = useState(false);
  const [play, setPlay] = useState(true);
  const [muted, setMuted] = useState(true);

  const toggleMovie = () => {
    setshowMovie(true);
  };
  const onMute = () => {
    muted ? setMuted(false) : setMuted(true);
  };

  return (
    <div className="smallMovieContainer">
      {/* <button onClick={toggleMovie}  */}
      {/* // className={` ${showMovie ? "smallDetailCard" : "hidden" }'} */}
  

      <ReactPlayer
        url={`https://youtu.be/${props.movie?.youtubeKey}`}
        playing={play}
        muted={muted}
        controls={false}
        loop={true}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default RowMoreInfo;
