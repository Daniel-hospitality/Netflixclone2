import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./InfoButton.css";
function InfoButton() {
  const [showMovie, setshowMovie] = useState(false);
  const toggleMovie = () => {
    setshowMovie(true);
  };
  return (
    <div>
      <div>
        <button onClick={toggleMovie} className="style-btn">
          <i className="fas fa-info-circle" /> &nbsp;&nbsp; Meer informatie
        </button>
      </div>
      <div className={`${showMovie ? "moreInfo" : "hidden"}`}>
        <div className="showMovie">
          <div>
            <ReactPlayer url="https://www.youtube.com/watch?v=sY8gUtyeAKE"
              playing={true}
              muted={true}
              controls={false}
              width="cover"
              height="500px" 
              onReady={()=>console.log('onReady callback')}
              onStart={()=>console.log(' onStart callback')}
              onPause={()=>console.log('onPause callback')}
              onEnded={()=>console.log(' onEnded callback')}
              onPause = {()=> console.log('onPause callback')}
              />
          </div>
          <div className="like_buttons">
            <button className="banner_button ">
              <i className="fas fa-caret-right " />
              &nbsp;&nbsp; Play
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
          </div>
        </div>
        <div className="container_movie_info">
          <div className="speelduur_overview">
            <p>2018 hier komt Speelduur: </p>{" "}
            <p>
              Overview: Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="director_genre">
            {" "}
            <p>hier komt director</p>
            <p>hier komt genres</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoButton;