import axios from "axios";
const API_URL = "https://yts-proxy.now.sh/list_movies.json";

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios.get(API_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};
// fetch(`${API_URL}`)
//   .then(res => res.json())
//   .then(json => json.data.movies);
