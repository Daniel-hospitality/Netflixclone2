import React, {useRef} from "react";
import Player from "./Player";
import InfoButton from "./MoreInfoButton/InfoButton"
import "./Banner.css";

function Banner(props) {
  const player = useRef(null);

  const handleClickFullscreen = () => {
    player.current.enableFullscreen();
  };
  
  const handleClickMute = () => {
    player.current.toggleMute();
  }

  return (
    <header className="banner">
        <button className="banner-mute-button" onClick={handleClickMute}>
          <i class="fas fa-volume-mute"></i>
        </button>
      <div className="player-wrapper">
        <Player ref={player} movie={props.movie}/>
      </div>
      <div className="banner_contents">
        <img
          className="banner_movielogo"
          src={props.movie?.logoUrl}
          alt={props.movie?.title + "logo"}
        /> 
        <h1 className="banner_description">{props.movie?.overview}</h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={handleClickFullscreen}>
            Play
          </button>
          <InfoButton movie={props.movie} />
        </div>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}
export default Banner;
