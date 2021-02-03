import React, {useState, useEffect} from "react";
import "./pages.css";
import Backend from "../Backend";


import Banner from "../components/Banner";
import Row from "../Row";
import requests from "../requests";

function Nieuw() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchMovies(335984);
      setMovie(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="app">

      <Banner movie={movie}/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      {/* <h1>Top 10 in Nederland vandaag </h1>

      <h1>New op Netflix </h1>

      <h1>Het wachten waard </h1>

      <h1>Vanaf volgende week </h1>

      <h1>Vanaf deze week </h1> */}
    </div>
  );
}

export default Nieuw;
