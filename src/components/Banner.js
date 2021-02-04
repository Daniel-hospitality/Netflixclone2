import React, {useEffect, useRef, useState} from "react";
import Backend from "../Backend";
import Player from "./Player";  
import InfoButton from "./MoreInfoButton/InfoButton"
import "./Banner.css";

function Banner(props) {
  const player = useRef(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchMovies(335984);
      setMovie(response.data);
    }
    fetchData();
  }, []);

  const handleClickFullscreen = () => {
    player.current.enableFullscreen();
  };
  
  const handleClickMute = () => {
    player.current.toggleMute();
  }
  return (
    <header className="banner">
        <button className="banner-mute-button" onClick={handleClickMute}>
          <i className="fas fa-volume-mute"></i>
        </button>
      <div className="player-wrapper">
        <Player ref={player} movie={movie}/>
      </div>
      <div className="banner_contents">
        <img
          className="banner_movielogo"
          src={movie?.logoUrl}
          alt={movie?.title + "logo"}
        /> 
        <h1 className="banner_description">{movie?.overview}</h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={handleClickFullscreen}>
            Play
          </button>
          <InfoButton movie={movie}/>
        </div>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}
export default Banner;
