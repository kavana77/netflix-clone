import { Movie } from "../types/Movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover rounded-md" />
      <h3 className="text-white text-lg mt-2">{movie.title}</h3>
      <p className="text-gray-400 text-sm mt-1"> {movie.rating}</p>
    </div>
  );
}
