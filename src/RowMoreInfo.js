import React from 'react'
import ReactPlayer from "react-player/youtube";

function RowMoreInfo(props) {
    const [showMovie, setshowMovie] = useState(false);
    const [play, setPlay] = useState(true);
    const [muted, setMuted] = useState(true);
    const toggleMovie = () => {
      setshowMovie(true);
    }

    return (
<div>
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
    )
  

export default RowMoreInfo;
