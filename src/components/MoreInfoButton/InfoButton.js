import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./InfoButton.css";

function InfoButton(props) {
  const [showMovie, setshowMovie] = useState(false);
  const toggleMovie = () => {
    setshowMovie(true);
    var stringOfGenres = "asdasdf";
    for (var i = 0; i < props.movie?.genres.length; i++) {
      // {props.movie?.genres[0].name}
      let banaan = "banaan";
      stringOfGenres.concat(banaan);
      console.log(stringOfGenres);
      console.log(banaan);
      console.log(props.movie?.genres.length);
    }
 
    };
    // for (var i = 0; i < props.movie?.genres.length; i++) {
    //   {props.movie?.genres[i].name}
    //   stringOfGenres.concat("banaan");
    //   console.log({props.movie?.genres[i].name});
    //   console.log(props.movie?.genres.length);
    // }
  
  const handleOnBlur = () => {
    setshowMovie(false);
  };

  // const [listOfGenres, setlistOfGenres] = useState(true);
  // const setlist

 

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
                playing={true}
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
            <div className="like_buttons">
              <button className="playButtonDetailCard ">
                <i className="fas fa-caret-right " />
                &nbsp;&nbsp; <p>Play</p>
              </button>
              <div>
                <i className="fas fa-plus like_styling" />
              </div>
              <div>
                <i className="far fa-thumbs-up like_styling" />
              </div>
              <div>
                <i className="far fa-thumbs-down like_styling" />
              </div>
              <div>
                <i
                  className="fas fa-volume-mute like_styling muteButtonDetailCard"
                  id="mute"
                />
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
          <div className="container_movie_info">
            <div className="speelduur_overview">
              <p>Runtime: {props.movie?.runtime} min </p>{" "}
              <p>{props.movie?.overview}</p>
            </div>
            <div className="director_genre">
              {" "}
              <p>Director: {props.movie?.director}</p>
              <p>
                Genres:  {props.movie?.genres[0].name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoButton;
