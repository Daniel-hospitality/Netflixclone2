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
import RowLane from "./RowLane/RowLane";
import RowLane2 from "./RowLane/RowLane2";




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


        <RowLane title="Thriller Backend"  />

        <RowLane2 title="Thriller Backend" fetchUrl={Backend.fetchGenresThriller} isLargeRow />
        

        {/* <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          isLargeRow
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          isLargeRow
        />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
      </div>
    </div>
  );
}

export default App;
