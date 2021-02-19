import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Row from "./Row";
// import requests from "./requests";
import Backend from "./Backend";
import Series from "./pages/Series";
import Films from "./pages/Films";
import Nieuw from "./pages/Nieuw";
import Lijst from "./pages/Lijst";
import Kijk from "./pages/Kijk";
import Banner from "./components/Banner";
import { FooterContainer } from "./footer/container/footer";
import MoviesLanes from "./RowLane/MoviesLanes";




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Series" component={Series} />
          <Route path="/Films" component={Films} />
          <Route path="/Nieuw" component={Nieuw} />
          <Route path="/lijst" component={Lijst} />
          <Route path="/Kijk" component={Kijk} />
        </Switch>

        <FooterContainer />
      </div>
    </Router>
  );
}

function Home() {
  const [movie] = useState();

  return (
    <div className="app">
      <Banner movie={movie} />
      <div className="row-container">


        <MoviesLanes title="Thriller" genre="thriller"  />
        <MoviesLanes title="Family" genre="family"  />
        <MoviesLanes title="Comedy" genre="comedy"  />
        <MoviesLanes title="Adventure" genre="adventure"  />
        <MoviesLanes title="Crime" genre="crime"  />
        <MoviesLanes title="Action" genre="action"  />
        <MoviesLanes title="Fantasy" genre="fantasy"  />
        <MoviesLanes title="Tom Cruise" casts="tomcruise"  />

        
      </div>
    </div>
  );
}

export default App;
