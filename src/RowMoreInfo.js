import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import InfoButton from "./components/MoreInfoButton/InfoButton";
import "../src/RowMoreInfo.css";
// import LineIcon from "react-lineicons";
function RowMoreInfo({ showMovie, movie }) {
  const [play, setPlay] = useState(true);
  const [muted, setMuted] = useState(true);

  // const [InfoButton, setInfoButton] = useState(false);
  // const moreInfo = ()=> {
  //   setsmallMovieContainer (true);
  // }
  const onMute = () => {
    muted ? setMuted(false) : setMuted(true);
  };
  // const handleCheckMark = () => {
  //   setInfoButton(true)
  // }
  return (
    <div className="smallMovieContainer">
      <div className={`${showMovie ? "smallMovieContainer" : ""}`}>
        {/* <button onClick={toggleMovie} /> */}
        <div className="icons-container">
          <div className="plusIcon" id="icon-plus">
            <i className="lni lni-plus"></i>
          </div>
          <div className="thumbsUp">
            <i className="lni lni-thumbs-up"></i>
          </div>
          <div className="thumbsDown">
            <i className="lni lni-thumbs-down"></i>
          </div>
          {/* <div className="checkMark">
          <InfoButton onClick={handleCheckMark} />
          <i class="lni lni-checkmark"></i>
          </div> */}
        </div>
        <div className="movieWrapper">
          <ReactPlayer
            url="https://youtu.be/GDLv1x2bi4I"
            playing={play}
            muted={muted}
            controls={false}
            loop={true}
            width="100%"
            height="7.3rem"
          />
        </div>
      </div>
    </div>
  );
}
export default RowMoreInfo;
