import { FaHeart } from "react-icons/fa";
import imdbLogo from "../assets/New Arrival/Icons/IMDB.png";
import tomatoesLogo from "../assets/New Arrival/Icons/Tomatoes.png";

interface Movie {
  title: string;
  poster: string;
  year: string;
  imdbRating: string;
  tomatoRating: string;
  genre: string;
  favorite?: boolean;
}

export default function NewArrival({ movie }: { movie: Movie }) {
  return (
    <div className="w-[250px] flex-shrink-0 text-center">
      {/* Poster Section */}
      <div className="relative w-[250px] h-[370px] bg-gray-300 rounded-lg overflow-hidden">
        <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />

        {/* Favorite Icon */}
        <div className="absolute top-2 right-2 flex items-center space-x-1">
          <div className="bg-white rounded-full p-1">
            <FaHeart className={`text-${movie.favorite ? "red-500" : "gray-400"}`} />
          </div>
        </div>
      </div>

      {/* Movie Details */}
      <p className="mt-2 text-gray-400 text-sm">{movie.year}</p>
      <h3 className="font-semibold text-lg">{movie.title}</h3>

      {/* Ratings Section */}
      <div className="flex justify-center items-center gap-4 mt-2">
        {/* IMDb Rating */}
        <div className="flex items-center gap-1">
          <img src={imdbLogo} alt="IMDb" className="w-8 h-4" />
          <span className="text-sm font-semibold">{movie.imdbRating}</span>
        </div>

        {/* Rotten Tomatoes Rating */}
        <div className="flex items-center gap-1">
          <img src={tomatoesLogo} alt="Rotten Tomatoes" className="w-4 h-4" />
          <span className="text-sm font-semibold">{movie.tomatoRating}</span>
        </div>
      </div>

      {/* Genre */}
      <p className="text-sm text-gray-500 mt-2">{movie.genre}</p>
    </div>
  );
}
