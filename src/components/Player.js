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
import "./Player.css";
import LineIcon from 'react-lineicons';

function Player(props, ref) {
  const player = useRef(null);
  const playerWrapper = useRef(null);

  const [playVideo, setPlayVideo] = useState(false);
  const [light, setLight] = useState(false);
  const [muted, setMuted] = useState(true);
  const [hidden, setHidden] = useState(true);

  useImperativeHandle(ref, () => ({
    enableFullscreen: () => {
      if (screenfull.isEnabled) {
        screenfull.request(playerWrapper.current);
      } 
    },
    toggleMute: () => {
      muted ? setMuted(false) : setMuted(true);
    },
    togglePlayPause: () => {
      playVideo ? setPlayVideo(false) : setPlayVideo(true);
    },
    toggleLight: () => {
      setLight(!light);
    },
    timedToggleLight: () => {
      setTimeout(() => {
        light ? setLight("") : setLight(`https://image.tmdb.org/t/p/original${props.movie?.backdropPath}`)
      }, 5000);
    },
  }));
  
  useEffect(() => {
    const toggleScreenfull = () => {
      if (screenfull.isEnabled) {
        screenfull.on('change', () => {
          screenfull.isFullscreen ? setMuted(false) : setMuted(true);
          screenfull.isFullscreen ? setHidden("show") : setHidden("hidden");
        });
      }
    };

    setTimeout(() => {
      setPlayVideo(true);
      setLight(true);
    }, 5000);
    toggleScreenfull();
  }, []);

  function handleExit(){
    screenfull.exit();
  }

  const handleMute = () => {
    muted ? setMuted(false) : setMuted(true);
  }

  const handlePause = () => {
    setPlayVideo(!playVideo);
  }

  function toggleShowButtons(){
    setHidden(false);
    setTimeout(function(){ setHidden(true); }, 5000);
  }

  return (
    <div ref={playerWrapper} onPointerMove={toggleShowButtons}>
        <ReactPlayer
          id="banner_player"
          className="banner-player"
          url={`https://youtu.be/${props.movie?.youtubeKey}`}
          frameborder="0"
          width="100%"
          height="100%"
          ref={player}
          playing={playVideo}
          muted={muted}
          playbackRate={1}
          controls={false}
          loop={true}
          light={`${light ? "" : `https://image.tmdb.org/t/p/original${props.movie?.backdropPath}`}`}
        />
        <button className={hidden ? "hidden" : "show" } id="player-fs-exit-btn" onClick={handleExit}>
          <LineIcon name="close"/>
        </button>

        <button className={hidden ? "hidden" : "show" } id="player-fs-mute-btn" onClick={handleMute}>
          <LineIcon name={muted ? "volume-mute" : "volume"}/>
        </button>

        <button className={hidden ? "hidden" : "show" } id="player-fs-play-btn" onClick={handlePause}>
          <LineIcon name={playVideo ? "pause" : "play"}/>
        </button>
    </div>
  );
}

Player = forwardRef(Player);

export default Player;
