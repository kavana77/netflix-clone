import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import lamb from "../assets/ExclusiveVideos/Thumbnails1.png";
import suicidesquad from "../assets/ExclusiveVideos/Thumbnails2.png";
import horror from "../assets/ExclusiveVideos/Thumbnails3.png";
import play from "../assets/ExclusiveVideos/Play.png";

interface Video {
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    title: "Lamb (2021) Trailer",
    thumbnail: lamb,
    videoUrl: "https://www.youtube.com/watch?v=hnEwJKVWjFM",
  },
  {
    title: "The Suicide Squad: John Cena Interview",
    thumbnail: suicidesquad,
    videoUrl: "https://www.youtube.com/watch?v=Xk8FAD_jPc4",
  },
  {
    title: "Will there be a new era of horror?",
    thumbnail: horror,
    videoUrl: "https://www.youtube.com/embed/vs0MeU-H3mE",
  },
];

export default function ExclusiveVideos() {
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
      {/* Section Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Exclusive Videos</h2>
        <button className="text-red-500 flex items-center gap-1 hover:underline">
          See more <FaChevronRight />
        </button>
      </div>

      {/* Video Carousel */}
      <div className="flex justify-center relative mt-20">
        {/* Left Chevron */}
        <button
          onClick={() => scroll(-400)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md w-12 h-12 flex items-center justify-center z-10"
        >
          <FaChevronLeft className="text-gray-700 text-xl" />
        </button>

        {/* Video List - Fixed No Scrollbar */}
        <div
          ref={scrollRef}
          className="flex gap-8 px-10 overflow-hidden scroll-smooth snap-x snap-mandatory"
        >
          {videos.map((video) => (
            <div key={video.title} className="w-[450px] flex-shrink-0 text-center snap-start">
              {/* Video Thumbnail */}
              <div className="w-[450px] h-[250px] bg-gray-300 rounded-lg overflow-hidden relative group">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />

                {/* Play Button (Click to Open Video) */}
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <img src={play} alt="Play" className="w-16 h-16" />
                </a>
              </div>

              {/* Video Title */}
              <p className="mt-4 font-medium text-lg">{video.title}</p>
            </div>
          ))}
        </div>

        {/* Right Chevron */}
        <button
          onClick={() => scroll(400)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white  rounded-full shadow-md w-10 h-10 flex items-center justify-center z-10"
        >
          <FaChevronRight className="text-gray-700 text-xl" />
        </button>
      </div>
    </section>
  );
}
