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
  const [rendered, setRendered] = useState(false);
  
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

  const handleMoreInfo = () => {
    player.current.togglePlayPause();
    rendered ? setRendered(false) : setRendered(true);
  }
  
  return (
    <header className="banner">
      <div className="player-wrapper">
        <Player ref={player} movie={movie}/>
      </div>
      <div className="banner_fadeBottom1" /> 
      <div className="banner_contents">
        <img
          className="banner_movielogo"
          src={movie?.logoUrl}
          alt={movie?.title + "logo"}
        /> 
        <p className="banner_description">{movie?.overview}</p>
        <div className="banner_buttons">
          <button className="banner_button" onClick={handleClickFullscreen}>
          <i className="fas fa-caret-right" />
             &nbsp;&nbsp; Play
          </button>
          <button className="banner-style-btn" onClick={handleMoreInfo}>
            <LineIcon name={"information"}/> &nbsp;&nbsp; Meer informatie
          </button>
          {rendered ? <InfoButton className="banner_button" movie={movie}/> : "" }
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
