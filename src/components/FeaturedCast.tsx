import {FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { casts } from "../utils/constant";
import useHorizontalScroll from "../hooks/useHorizontalScroll";

export default function FeaturedCasts() {
  const {scrollRef,scroll} = useHorizontalScroll()


  return (
    <section className="px-8 py-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Featured Casts</h2>
        <button className="text-red-500 flex items-center gap-1">
          See more <FaChevronRight />
        </button>
      </div>
      <div className="flex justify-center relative mt-10">
        {/* Left Chevron */}
        <button
        onClick={() => scroll(-250)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md w-10 h-10 flex items-center justify-center"
        >
        <FaChevronLeft/>
        </button>

        {/* Cast List */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-10 px-10 no-scrollbar"
        >
          {casts.map((cast) => (
            <div key={cast.name} className="w-[250px] flex-shrink-0 text-center">
              <div className="w-[250px] h-[370px] bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={cast.image}
                  alt={cast.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 font-medium">{cast.name}</p>
            </div>
          ))}
        </div>

        {/* Right Chevron */}
        <button
        onClick={() => scroll(250)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md w-10 h-10 flex items-center justify-center"
        >
        <FaChevronRight/>
        </button>
      </div>
    </section>
  );
}
