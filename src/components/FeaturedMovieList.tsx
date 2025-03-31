import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FeaturedMovie from "./FeaturedMovie";
import stranger from "../assets/FeaturedMovie/Poster1.png";
import batman from "../assets/FeaturedMovie/Poster2.png";
import SpiderMan from "../assets/FeaturedMovie/Poster3.png";
import Dunkirk from "../assets/FeaturedMovie/Poster4.png";
import { MovieList } from "../types/MovieList.";
const movies: MovieList[] = [
  {
    title: "Stranger Things",
    poster: stranger,
    year: "USA, 2016",
    imdbRating: "860/100",
    tomatoRating: "97%",
    genre: "Action, Adventure, Horror",
    favorite: false,
  },
  {
    title: "Batman Begins",
    poster: batman,
    year: "USA, 2025",
    imdbRating: "82.0/100",
    tomatoRating: "70%",
    genre: "Action, Adventure",
    favorite: false,
  },
  {
    title: "Spider-Man : Into The Spider Verse",
    poster: SpiderMan,
    year: "USA, 2018",
    imdbRating: "84.0/100",
    tomatoRating: "87%",
    genre: "Animation,Action, Adventure",
    favorite: false,
  },
  {
    title: "Dunkirk",
    poster: Dunkirk,
    year: "USA, 2017",
    imdbRating: "78.0/100",
    tomatoRating: "94%",
    genre: "Action, Drama, History",
    favorite: false,
  },
];

export default function FeaturedMovieList() {
        const scrollRef = useRef<HTMLDivElement>(null);
    
        const scroll = (offset: number) => {
          if (scrollRef.current) {
            scrollRef.current.scrollTo({
              left: scrollRef.current.scrollLeft + offset,
              behavior: "smooth",
            });
          }
        };
  return (
    <section className="px-8 py-20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Featured Movie</h2>
        <button className="text-red-500 flex items-center gap-1 hover:underline">
          See more<FaChevronRight/>
        </button>
      </div>
      <div className="relative mt-10">
        {/* Left Chevron */}
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md w-12 h-12 flex items-center justify-center z-10"
        >
          <FaChevronLeft className="text-gray-700 text-xl" />
        </button>
 {/* Movie List (Scrollable) */}
        <div
          ref={scrollRef}
          className="flex justify-center gap-10 px-10 overflow-hidden scroll-smooth snap-x snap-mandatory"
        >
          {movies.map((movie, index) => (
            <FeaturedMovie key={index} movie={movie} />
          ))}
        </div>

        {/* Right Chevron */}
        <button
          onClick={() => scroll(300)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md w-12 h-12 flex items-center justify-center z-10"
        >
          <FaChevronRight className="text-gray-700 text-xl" />
        </button>
      </div>
    </section>
  );
}
