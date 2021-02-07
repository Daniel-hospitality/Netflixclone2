import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./InfoButton.css";

function InfoButton(props) {
  const [showMovie, setshowMovie] = useState(false);
  const [genres, setGenres] = useState(null);
  const [play, setPlay] = useState(true);
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

  // const handlePlayPause = () => {
  //   if (play === true) {
  //     setPlay(false);
  //   }
  // };

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
            <div>
              <ReactPlayer
                url={`https://youtu.be/${props.movie?.youtubeKey}`}
                playing={play}
                muted={true}
                controls={false}
                loop={true}
                width="cover"
                height="500px"
                onReady={() => console.log("onReady callback")}
                onStart={() => console.log(" onStart callback")}
                onPause={() => console.log("onPause callback")}
                onEnded={() => console.log(" onEnded callback")}
              />
            </div>

            <div className="playbutton">
                <button className="playButtonDetailCard ">
                  <i className="fas fa-caret-right" /> &nbsp;&nbsp; Play
                </button>
            </div>
            

            <div className="plus-button">
                <i class="lni lni-plus"></i>
              </div>


            <div className="icons-miniplayer-container">
              
              <div className="thumbsUp">
              <i class="lni lni-thumbs-up"></i>
              </div>
              <div className="thumbsDown">
              <i class="lni lni-thumbs-down"></i>
              </div>

              <div className="mute-button">
                <i
                  className="fas fa-volume-mute like_styling muteButtonDetailCard"
                  id="mute"
                />
              </div>
              {/* <div

                  onClick={handleonStop}
                ></div> */}
              <div className="closeMovie">
                <i className="fas fa-times"></i>
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
            <div className="director_genre"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoButton;
