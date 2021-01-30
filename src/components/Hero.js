import React, { Component } from 'react'
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";
import InfoButton from "../components/MoreInfoButton/InfoButton";
import Backend from "../Backend";
import "./Banner.css";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      muted: true,
      controls: false,
    }
    this.player = React.createRef();
  
    this.handleClickFullscreen = this.handleClickFullscreen.bind(this);
  }
  
  async componentDidMount() {
    const response = await Backend.fetchMovies(335984);
    this.setState({ movie: response.data });
  }

  handleClickFullscreen = () => {
    this.setState({ muted: false });
    this.setState({ controls: true});
    screenfull.request(findDOMNode(this.player.current.wrapper));
  };

  render() {
    return (
      <header className="banner">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={`https://youtu.be/${this.state.movie?.youtubeKey}`}
            light={`https://image.tmdb.org/t/p/original${this.state.movie?.backdropPath}`}
            controls={this.state.controls}
            muted={this.state.muted}
            loop={true}
            ref={this.player}
            playbackRate={1}
            width="100%"
            height="100%"

          />
        </div>
        <div className="banner_contents">
        <img
          className="banner_movielogo"
          src={this.state.movie?.logoUrl}
          alt={this.state.movie?.title + "logo"}
        />
        <h1 className="banner_description">{this.state.movie?.overview}</h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={this.handleClickFullscreen}>
            Play
          </button>
          <InfoButton />
        </div>
      </div>

      <div className="banner_fadeBottom" />
      </header>
    )
  }
}

