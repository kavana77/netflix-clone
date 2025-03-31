import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NewArrival from "./NewArrival";
import dune from "../assets/New Arrival/Poster1.png";
import noTimeToDie from "../assets/New Arrival/Poster2.png";
import shangChi from "../assets/New Arrival/Poster3.png";
import dontBreathe from "../assets/New Arrival/Poster4.png";
import {MovieList} from "../types/MovieList.";

const movies: MovieList[]= [
  {
    title: "Dune",
    poster: dune,
    year: "USA, 2021",
    imdbRating: "840/100",
    tomatoRating: "75%",
    genre: "Action, Adventure, Drama",
    favorite: false,
  },
  {
    title: "No Time To Die",
    poster: noTimeToDie,
    year: "USA, 2021",
    imdbRating: "760/100",
    tomatoRating: "68%",
    genre: "Action, Adventure, Thriller",
    favorite: true,
  },
  {
    title: "Shang-Chi and the Legend of the Ten Rings",
    poster: shangChi,
    year: "USA, 2021",
    imdbRating: "790/100",
    tomatoRating: "71%",
    genre: "Action, Adventure, Fantasy",
    favorite: false,
  },
  {
    title: "Don't Breathe 2",
    poster: dontBreathe,
    year: "USA, 2021",
    imdbRating: "610/100",
    tomatoRating: "46%",
    genre: "Action, Drama, Horror",
    favorite: false,
  },
];

export default function MoviesList() {
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
        <h2 className="text-2xl font-bold">New Arrival</h2>
        <button className="text-red-500 flex items-center gap-1 hover:underline">
          See more<FaChevronRight/>
        </button>
      </div>
   {/* Movie Carousel with Chevrons */}
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
            <NewArrival key={index} movie={movie} />
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
