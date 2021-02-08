import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import LineIcon from 'react-lineicons';
import screenfull from "screenfull";
import "./InfoButton.css";
function InfoButton(props) {
  const playerWrapper = useRef(null);
  const [showMovie, setshowMovie] = useState(false);
  const [genres, setGenres] = useState(null);
  const [play, setPlay] = useState(true);
  const [muted, setMuted] = useState(true);
  const toggleMovie = () => {
    setshowMovie(true);
    setGenres(returnGenres);
  };
  const returnGenres = () => {
    let values = [];
    for (let i = 0; i < props.movie?.genres.length; i++) {
      values.push(props.movie?.genres[i].name);
    }
    return values.join(", ");
  };
  const handleOnBlur = () => {
    setshowMovie(false);
  };
  const handlePlayPause = () => {
    if (play === true) {
      setPlay(false);
    }
  };
  const handleToggleMuted = () => {
    muted ? setMuted(false) : setMuted(true);
  }
  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.request(playerWrapper.current);
      handleToggleMuted();
    } 
  };
  const handleClose = () => {
    setshowMovie(false);
  }
  return (
    <div>
      <div
        onClick={handleOnBlur}
        className={`${showMovie ? "blurMoreDetailsCard" : "hidden"}`}
      ></div>
      <div>
        <button onClick={toggleMovie} className="style-btn">
          <i className="fas fa-info-circle" /> &nbsp;&nbsp; Meer informatie
        </button>
      </div>
      <div className="centerMoreInfo">
        <div className={`${showMovie ? "moreInfo" : "hidden"}`}>
          <div className="showMovie">
            <div className="closeMovie" onClick={handleClose}>
              <LineIcon name="close"/>
            </div>
            <div className="mute-button" onClick={handleToggleMuted}>
              <i
                className={muted ? "fas fa-volume-mute" : "fas fa-volume-up"}
                id="mute"
              />
            </div>
            <div className="playerWrapper" ref={playerWrapper}>
              <ReactPlayer
                url={`https://youtu.be/${props.movie?.youtubeKey}`}
                playing={play}
                muted={muted}
                controls={false}
                loop={true}
                width="100%"
                height="100%"
                />
            </div>
            <div className="playbutton">
              <button className="playButtonDetailCard" onClick={handleFullscreen}>
                <i className="fas fa-caret-right" /> &nbsp;&nbsp; Play
              </button>
            </div>
            <div className="icons-container">
              <div className="icon-btn" id="icon-plus">
                <i class="lni lni-plus"></i>
              </div>
              <div className="icon-btn">
                <i class="lni lni-thumbs-up"></i>
              </div>
              <div className="icon-btn">
                <i class="lni lni-thumbs-down"></i>
              </div>
            </div>
          </div>
          <div className="container_movie_info">
            <div className="runTime_overview">
              <div className="movieJarFile">
                <div className="genresMovies">
                  Genres: &nbsp; <h5>{genres}</h5>
                </div>
                <div className="movieDirector">
                  <p>
                    Director:&nbsp; <h5>{props.movie?.director}</h5>
                  </p>
                </div>
                <div className="playTime">
                  <p>
                    Runtime: &nbsp; <h5>{props.movie?.runtime}</h5> min{" "}
                  </p>{" "}
                </div>
              </div>
              <div className="movieOverview">
                <p>{props.movie?.overview}</p>
              </div>
            </div>
            <div className="director_genre"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoButton;