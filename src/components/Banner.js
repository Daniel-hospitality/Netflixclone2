import React, { useState, useEffect } from "react";
import InfoButton from "./MoreInfoButton/InfoButton";
import Backend from "../Backend";
import "./Banner.css";
import Player from "./Player";

function Banner() {
  const player = useRef(null);
  const [movie, setMovie] = useState();
  
  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchMovies(122);
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
