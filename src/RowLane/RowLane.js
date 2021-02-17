// import React, {useState}from 'react'
// import Backend from "../Backend";
// import Player from "./Player";
// import LineIcon from 'react-lineicons';


// import "./RowLane.css";

// function RowLane() {
//   const [action, setAction] = useState([]);
    
    
//     useEffect(() => {
//         async function fetchData() {
//           const response = await Backend.fetchgenres(action);
//           setAction(response.data);
//         }
//         fetchData();
//         console.log(action)
//       }, []);

      
    
//     return (
//       <div className="rowLane">
//       <h2>{title}</h2>

//       <div className="row_posters"> 
//         {action.map(action => {
//           return <img
//               key={movie.id}
//               onClick={() => handleClick(action)}
//               className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//               src={`${base_url}${
//                 isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//               alt={movie.name} />
          
//         })}
         
//       </div>
//     )
// }

// export default RowLane;
