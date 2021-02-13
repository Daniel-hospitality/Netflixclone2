import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import LineIcon from 'react-lineicons';
import screenfull from "screenfull";
import "./more-info.css";
import "../Player.css";

function MoreInfoCard(props) {
  const playerWrapper = useRef(null);

  const [genres, setGenres] = useState(null);
  const [play, setPlay] = useState(true);
  const [muted, setMuted] = useState(true);
  const [hidden, setHidden] = useState(true);

  const returnGenres = () => {
    let values = [];
    for (let i = 0; i < props.movie?.genres.length; i++) {
      values.push(props.movie?.genres[i].name);
    }
    return values.join(", ");
  };

  useEffect(() => {
    setGenres(returnGenres());
  }, []);

  const handlePause = () => {
    play ? setPlay(false) : setPlay(true);
  }

  const handleToggleMuted = () => {
    muted ? setMuted(false) : setMuted(true);
  }
  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.request(playerWrapper.current);
      screenfull.on('change', () => {
        screenfull.isFullscreen ? setMuted(false) : setMuted(true);
        screenfull.isFullscreen ? setHidden("show") : setHidden("hidden");
      });
    }
  };

  function handleExit(){
    screenfull.exit();
  }

  function toggleShow(){
    setHidden(false);
    setTimeout(function(){ setHidden(true); }, 8000);
  }

  return (
    <div>
      <div
        onClick={props.toggleRendered}
        className={"blurMoreDetailsCard"}
      ></div>
      <div className="centerMoreInfo">
        <div className={"moreInfo"}>
          <div className="showMovie">
            <div className="closeMovie" onClick={props.toggleRendered}>
              <LineIcon name="close"/>
            </div>
            <div className="mute-button" onClick={handleToggleMuted}>
              <i
                className={muted ? "fas fa-volume-mute" : "fas fa-volume-up"}
                id="mute"
              />
            </div>
            <div className="playerWrapper" ref={playerWrapper} onPointerMove={toggleShow}>
              <ReactPlayer
                url={`https://youtu.be/${props.movie?.youtubeKey}`}
                playing={play}
                muted={muted}
                controls={false}
                loop={true}
                width="100%"
                height="100%"
                />
                <button className={hidden ? "hidden" : "show"} id="player-fs-exit-btn" onClick={handleExit}>
                 <LineIcon name="close"/>
                </button>

                <button className={hidden ? "hidden" : "show"} id="player-fs-mute-btn" onClick={handleToggleMuted}>
                 <LineIcon name={muted ? "volume" : "volume-mute"}/>
                </button>

                <button className={hidden ? "hidden" : "show"} id="player-fs-play-btn" onClick={handlePause}>
                  <LineIcon name={play ? "pause" : "play"}/>
                </button>
            </div>
            <div className="logo-container">
              <img
                className="more-info-logo"
                src={props.movie?.logoUrl}
                alt={props.movie?.title + "logo"}
              /> 
            </div>
            <div className="icons-container">
              <button className="playButtonDetailCard" onClick={handleFullscreen}>
                <i className="fas fa-caret-right" /> &nbsp;&nbsp; Play
              </button>
              <div className="icon-btn" id="icon-plus">
                <i className="lni lni-plus"></i>
              </div>
              <div className="icon-btn">
                <i className="lni lni-thumbs-up"></i>
              </div>
              <div className="icon-btn">
                <i className="lni lni-thumbs-down"></i>
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
export default MoreInfoCard;