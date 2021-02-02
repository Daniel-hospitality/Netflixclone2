import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import "./Banner.css";

function Player(props, ref) {
  const player = useRef(null);

  const [playVideo, setPlayVideo] = useState(false);
  const [light, setLight] = useState(false);
  const [muted, setMuted] = useState(true);

  useImperativeHandle(ref, () => ({
    enableFullscreen: () => {
      if (screenfull.isEnabled) {
        screenfull.request(player.current.wrapper);
        setMuted(false);
      }
    },
    toggleMute: () => {
      if (muted) {
        setMuted(false);
      } else {
        setMuted(true);
      }
    }
  }));

  useEffect(() => {
    setTimeout(() => {
      setPlayVideo(true);
      setLight(true);
    }, 5000);
  }, []);

  return (
    <div>
        <ReactPlayer
          className="banner-player"
          url={`https://youtu.be/${props.movie?.youtubeKey}`}
          playing={playVideo}
          width="100%"
          height="100%"
          ref={player}
          playbackRate={1}
          controls={false}
          muted={muted}
          loop={true}
          light={`${light ? "" : `https://image.tmdb.org/t/p/original${props.movie?.backdropPath}`}`}
        />
    </div>
  );
}

Player = forwardRef(Player);

export default Player;
