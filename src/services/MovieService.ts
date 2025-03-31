import axios from "axios";
import { Movie } from "../types/Movie";

const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";

// Define an interface for the expected API response
interface TMDBResponse {
  results: Movie[];
}

export async function getMovies(endpoint: string): Promise<Movie[]> {
  const response = await axios.get<TMDBResponse>(`${BASE_URL}/${endpoint}?api_key=${API_KEY}`);

  return response.data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster}`,
    overview: movie.overview,
    rating: movie.rating,
  }));
}
