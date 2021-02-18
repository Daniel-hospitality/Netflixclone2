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
  }
  

  return (
   
    <div className="smallMovieContainer">
         <div className={`${showMovie ? "smallDetailcard" : "hidden"}`}>
      <button onClick={toggleMovie} />
        <div className="icons-container">
          <div className="plusIcon" id="icon-plus">
            <i className="lni lni-plus"></i>
          </div>
          <div className="thumbsUp">
            <i className="lni lni-thumbs-up"></i>
          </div>
          <div className="thumbsDown">
            <i className="lni lni-thumbs-down"></i>
          </div>
          <div className="checkMark">
          <i class="lni lni-checkmark"></i>
          </div>
        </div>
        <ReactPlayer
          url={`https://youtu.be/${props.movie?.youtubeKey}`}
          playing={play}
          muted={muted}
          controls={false}
          loop={true}
          width="100%"
          height="7.3rem"
        />
      </div>
      </div>
  
    
  );
}

export default RowMoreInfo;

