import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { findDOMNode } from "react-dom";
import screenfull from "screenfull";

function Player() {
  const [movie, setMovie] = useState();
  const [muted, setMuted] = useState(true);
  const [controls, setControls] = useState(false);
  const refPlayer = useRef(null);

  return (
    <ReactPlayer
      className="react-player"
      url={`https://youtu.be/${movie?.youtubeKey}`}
      // light={`https://image.tmdb.org/t/p/original${movie?.backdropPath}`}
      controls={controls}
      ref={refPlayer}
      playbackRate={1}
      width="100%"
      height="100%"
      muted={muted}
      loop={true}
      config={{
        youtube: {
          playerVars: {
            disable: 0,
            autoplay: 1,
            playsinline: 1,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            fs: 0,
          },
        },
      }}
    />
    );
  }
  export default Player;