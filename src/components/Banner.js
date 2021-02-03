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
          <i className="fas fa-caret-right" />
             &nbsp;&nbsp; Play

          </button>
          <InfoButton className="banner_button" movie={props.movie} />
          <button className="banner_button_mute" onClick={handleClickMute}>
          <i className="fas fa-volume-mute"></i>
          {/* <i class="fas fa-volume-off"></i> */}
          </button>
        </div>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}
export default Banner;
