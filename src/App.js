import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Row from "./Row";
// import requests from "./requests";
// import Backend from "./Backend";
import Series from "./pages/Series";
import Films from "./pages/Films";
import Nieuw from "./pages/Nieuw";
import Lijst from "./pages/Lijst";
import Kijk from "./pages/Kijk";
import Banner from "./components/Banner";
import { FooterContainer } from "./footer/container/footer";
import MovieLane from "./RowLane/MovieLane";

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

      <MovieLane title="Comedy" genre="THRILLER"/>
      <MovieLane title="Family" genre="FAMILY" />
      <MovieLane title="Comedy" genre="COMEDY"  />
      <MovieLane title="Adventure" genre="ADVENTURE"  />
      <MovieLane title="Crime" genre="CRIME"  />
      <MovieLane title="Action" genre="ACTION"  />
      <MovieLane title="Fantasy" genre="FANTASY"  />
        
    </div>
  );
}

export default App;
