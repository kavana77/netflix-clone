import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API_KEY, API_HOST } from "../envConfig";
import { useDispatch } from "react-redux";
import { addSearchedMovie } from "../redux/searchSlice";

interface Movie {
  id: number;
  name: string;
  year: number;
  image_url: string;
  overview?: string;
  user_rating?: number;
  vote_count?: number;
}

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q") || "";

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchQuery) return;

    setLoading(true);
    setError(null);

    fetch(
      `${API_HOST}search/?apiKey=${API_KEY}&search_field=name&search_value=${encodeURIComponent(
        searchQuery
      )}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        const results = data.title_results || [];
        setMovies(results);

        if (results.length > 0) {
          dispatch(addSearchedMovie(results[0]));
        }
      })
      .catch((err) => {
        setError("Failed to fetch movies.");
        console.error("Error fetching movies:", err);
      })
      .finally(() => setLoading(false));
    }, [searchQuery, dispatch]);

  const movieToDisplay = movies.length > 0 ? movies[0] : null;

  return (
    <div className="container mx-auto px-4 py-6 text-white">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for "{searchQuery}"
      </h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !movieToDisplay && !error && <p>No results found.</p>}

      {movieToDisplay && (
        <div className="bg-transparent rounded-lg shadow ">
          <h2 className="text-xl font-semibold">{movieToDisplay.name}</h2>
          <p className="text-gray-400 text-sm mb-2">{movieToDisplay.year}</p>
          <img
            src={movieToDisplay.image_url}
            alt={movieToDisplay.name}
            className="w-40 h-auto rounded"
          />
          <p className="mt-2">{movieToDisplay.overview}</p>
        </div>
      )}
    </div>
  );
}
