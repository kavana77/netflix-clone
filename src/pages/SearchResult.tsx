import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovies } from "../services/MovieService";
import { Movie } from "../types/Movie";
import MovieList from "../components/MovieList";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (query) {
        getMovies(query).then(setMovies);
    }
  }, [query]);

  return (
    <div className="p-6 text-white mt-20">
      <h1 className="text-2xl font-bold">Search Results for "{query}"</h1>
      <MovieList title="" movies={movies} />
    </div>
  );
}
