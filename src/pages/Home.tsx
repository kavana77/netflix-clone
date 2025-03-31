import { useEffect, useState } from "react";
import { getMovies } from "../services/MovieService";
import { Movie } from "../types/Movie";
import Navbar from "../components/Navbar";
import FeaturedMovie from "../components/MovieCard";
import MovieList from "../components/MovieList";

export default function Home() {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [newReleases, setNewReleases] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies("movie/popular").then((movies) => setFeaturedMovie(movies[0]));
    getMovies("movie/top_rated").then(setPopularMovies);
    getMovies("movie/now_playing").then(setNewReleases);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      {featuredMovie && <FeaturedMovie movie={featuredMovie} />}
      <MovieList title="Popular Movies" movies={popularMovies} />
      <MovieList title="New Releases" movies={newReleases} />
    </div>
  );
}
