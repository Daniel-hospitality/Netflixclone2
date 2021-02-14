import React, { useCallback, useState, useEffect, useRef } from "react";
import Backend from "../Backend";
import LineIcon from 'react-lineicons';
import Player from "./Player";
import MoreInfoCard from "./MoreInfoButton/MoreInfoCard"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import "./Banner.css";

function Banner() {
  const player = useRef(null);
  const bannerRef = useRef(null);

  const [movie, setMovie] = useState();
  const [muted, setMuted] = useState(true);
  const [rendered, setRendered] = useState(false);
  const [genres, setGenres] = useState(null);

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
    muted ? setMuted(false) : setMuted(true);
  }

  const handleBodyScroll = () => {
    rendered ? console.log('bodyscroll: locked') : console.log('bodyscroll: unlocked');
    rendered ? enableBodyScroll(bannerRef.current) : disableBodyScroll(bannerRef.current);
  }
  
  const toggleRendered = () => {
    rendered ? setRendered(false) : setRendered(true);
    handleBodyScroll();
    player.current.togglePlayPause();
    setGenres(returnGenres);
  }

  const returnGenres = () => {
    let values = [];
    for (let i = 0; i < movie.genres?.length; i++) {
      values.push(movie.genres[i]?.name);
    }
    return values.join(", ");
  };

  return (
    <header className="banner" ref={bannerRef}>
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
          <button className="banner_button" onClick={toggleRendered}>
            <i className="fas fa-info-circle"></i> &nbsp;&nbsp; Meer informatie
          </button>
          {rendered ? <MoreInfoCard movie={movie} toggleRendered={toggleRendered} genres={genres}/> : "" }
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
