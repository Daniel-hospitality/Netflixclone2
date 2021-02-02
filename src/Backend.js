import axios from "axios";

const client = axios.create({
  method: "GET",
  mode: "cors",
  baseURL: "http://localhost:8080"
});
const requests = {
  fetchMovies: (movieId) => client.get(`/movies/${movieId}`)
};

export default requests;