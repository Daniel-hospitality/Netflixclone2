import React from "react";
import Navbar from "./components/Navbar/Navbar";
// import Nav from "./components/Navbar/Navoud"
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Row from "./Row";
import requests from "./requests";

// eigen import //
// import { Series, Films, Nieuw, Lijst, Kijk } from "./pages";
import Series from "./pages/Series";
import Films from "./pages/Films";
import Nieuw from "./pages/Nieuw";
import Lijst from "./pages/Lijst";
import Kijk from "./pages/Kijk";

import Banner from "./components/Banner";
import { FooterContainer } from "./footer/container/footer";

//605573c650780e682a02144be1ed2304//
//https://api.themoviedb.org/3/movie/550?api_key=605573c650780e682a02144be1ed2304//

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Nav /> */}

        
        {/* <main style={{ marginTop: "1px" }}>
          {" "} */}
        {/*tijdelijk*/}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Series" component={Series} />
          <Route path="/Films" component={Films} />
          <Route path="/Nieuw" component={Nieuw} />
          <Route path="/lijst" component={Lijst} />
          <Route path="/Kijk" component={Kijk} />
        </Switch>
        {/* </main> */}

        <FooterContainer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
