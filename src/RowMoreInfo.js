import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import LineIcon from 'react-lineicons';

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
  // <div className={` ${showMovie ? "smallDetailCard" : "hidden" }'}>

    <div>
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
    {/* <div>
              <div className="icon-btn" id="icon-plus">
                <i className="lni lni-plus"></i>
              </div>
              <div className="icon-btn">
                <i className="lni lni-thumbs-up"></i>
              </div>
              <div className="icon-btn">
                <i className="lni lni-thumbs-down"></i>
    </div> */}
    {/* <div className="mute-button" onClick={onMute}>
              <i className={muted ? "fas fa-volume-mute" : "fas fa-volume-up"}
                id="mute"
              /> */}
    )
};

export default RowMoreInfo;
