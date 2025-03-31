import { Movie } from "../types/Movie";
import MovieCard from "./MovieCard"

interface MovieListProps {
  title: string;
  movies: Movie[];
}

export default function MovieList({ title, movies }: MovieListProps) {
  return (
    <section className="p-6">
      <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
