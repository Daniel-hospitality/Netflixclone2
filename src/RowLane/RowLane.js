import React, { useState, useEffect } from "react";
import Backend from "../Backend";
import "./RowLane.css";
// import LineIcon from 'react-lineicons';
// import Player from "./Player";

const base_url = "https://image.tmdb.org/t/p/original/";

function RowLane({ title, fetchUrl, isLargeRow }) {
  const [thriller, setThriller] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchGenres("thriller");
      setThriller(response.data);
    //   console.log(response.data);
    }
    fetchData();
  }, []);

//   const handleClick = (thriller) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       thrillerTrailer(thriller?.name || "")
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

  return (
    <div className="rowlane">
      <h2>{title}</h2>

      <div className="row_posters">
        {thriller.map((thriller) => {
          return (
            <img
              key={thriller.id}
            //   onClick={() => handleClick(thriller)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? thriller.posterPath : thriller.backdropPath
              }`}
              alt={thriller.logoUrl}
              
            />
            
          );
        })}
      </div>

      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>} */}
    </div>
  );
}

export default RowLane;