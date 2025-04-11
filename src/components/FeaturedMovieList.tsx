import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FeaturedMovie from "./FeaturedMovie";
import { movies } from "../utils/constant";
import useHorizontalScroll from "../hooks/useHorizontalScroll";

export default function FeaturedMovieList() {
  const {scrollRef,scroll} = useHorizontalScroll()

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
