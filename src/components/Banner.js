<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Backend from "../Backend";
import ReactPlayer from "react-player";
// import screenfull from "screenfull";
// import YouTube from "react-youtube";
// import ReactPlayer from 'react-player';
import InfoButton from "../components/MoreInfoButton/InfoButton"

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  // const [play, setPlay] = useState(false);
  useEffect(() => {
    async function fetchData() {
      // const request = await axios.get(requests.fetchNetflixOriginals);
      // setMovie(
      //   request.data.results[
      //     Math.floor(Math.random() * request.data.results.length - 1)
      //   ]
      // );
      // return request;

      const response = await Backend.fetchMovies(335984);
      setMovie(response.data);
    }
    fetchData();
  }, []);

  // function truncate(str, n) {
  //   //... na 200 karakters in description//
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }

  // function toggleColor() {
  //   const nav = document.querySelector(".nav_container");
  //   nav.style.background = "black";
  // }
=======
import React, {useRef} from "react";
import Player from "./Player";
import InfoButton from "./MoreInfoButton/InfoButton"
import "./Banner.css";

function Banner(props) {
  const player = useRef(null);
>>>>>>> c4a14ef00e780c2e9463c71111d39c63e5eca5eb

  const handleClickFullscreen = () => {
    player.current.enableFullscreen();
  };
  
  const handleClickMute = () => {
    player.current.toggleMute();
  }

<<<<<<< HEAD
  // function allowFullscreen() {
  //   screenfull.request();
  // }

  console.log(movie);

=======
>>>>>>> c4a14ef00e780c2e9463c71111d39c63e5eca5eb
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
