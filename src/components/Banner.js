import React, { useState, useEffect, useRef } from "react";
import Backend from "../Backend";
import InfoButton from "./MoreInfoButton/InfoButton";
import LineIcon from 'react-lineicons';
import Player from "./Player";
import "./Banner.css";

function Banner() {
  const player = useRef(null);
  const [movie, setMovie] = useState();
  const [muted, setMuted] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchMovies(155);
      setMovie(response.data);
    }
    fetchData();
  }, []);
   
  const handleClickFullscreen = () => {
    player.current.enableFullscreen();
  };
  
  const handleClickMute = () => {
    player.current.toggleMute();
    muted ? setMuted(false) : setMuted(true);
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
          <InfoButton className="banner_button" movie={movie} />
          <button className="banner_button_mute" onClick={handleClickMute}>
            <LineIcon name={muted ? "volume-mute" : "volume"}/>
          </button>

        </div>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}
export default Banner;
