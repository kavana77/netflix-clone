import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Poster from "../assets/Header/Poster.png";
import IMDB from "../assets/Header/IMDB.png";
import Tomatoes from "../assets/Header/Tomatoes.png";

const API_KEY = "98e19f6510msha80240eb72caf75p1211c4jsn187a8c742c7b";
const API_HOST = "https://rapidapi.com/";

interface Movie {
    title: string;
    backdrop_path: string;
    overview: string;
    vote_average: number;
    vote_count: string;
}

// Default values if no movie is found
const DEFAULT_TITLE = "John Wick 3 : Parabellum";
const DEFAULT_OVERVIEW = "John Wick is on the run after killing a member of the international assassins guild, and with a $14 mittion price tag on his head, he is the target of hit men and women everywhere..";
const DEFAULT_VOTE_AVERAGE = "86.0/100";
const DEFAULT_VOTE_COUNT = "97%";

export default function Header() {
    const [movieQuery, setMovieQuery] = useState<string>("");
    const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
    const [poster, setPoster] = useState<string>(Poster);
    const navigate = useNavigate();

    async function fetchMovie(movieName: string) {
        try {
            const response = await fetch(
                `https://${API_HOST}/3/search/movie?query=${movieName}&api_key=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            if (data.results.length > 0) {
                const movie = data.results[0];
                setFeaturedMovie(movie);
                setPoster(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`);
            } else {
                // Reset to default if no movie is found
                setFeaturedMovie(null);
                setPoster(Poster);
            }
        } catch (error) {
            console.error("Error fetching movie:", error);
        }
    }

    function handleSearch(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (movieQuery.trim()) {
            fetchMovie(movieQuery);
            navigate(`/search?q=${movieQuery}`);
        }
    }

    return (
        <div className="relative w-full h-[100vh] text-white">
            {/* Navbar */}
            <Navbar query={movieQuery} setQuery={setMovieQuery} handleSearch={handleSearch} />

            {/* Hero Section */}
            <div className="relative w-full h-full flex flex-col justify-center items-start px-12">
                {/* Background Image */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-225">
                    <img
                        src={poster}
                        alt={featuredMovie?.title || DEFAULT_TITLE}
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>

                {/* Movie Details */}
                <div className="bg-transparent p-6 text-white max-w-lg rounded-lg shadow-lg relative z-10">
                    <h1 className="text-4xl font-bold mb-2">{featuredMovie?.title || DEFAULT_TITLE}</h1>
                    <div className="flex items-center space-x-4 mb-4">
                        <span className="flex items-center gap-2 text-yellow-400 px-2 py-1 rounded text-sm">
                            <img src={IMDB} alt="IMDb" className="w-8 h-4" />
                            {featuredMovie?.vote_average?.toFixed(1) || DEFAULT_VOTE_AVERAGE}
                        </span>
                        <span className="flex justify-center gap-2 text-sm">
                            <img src={Tomatoes} className="w-4 h-4"/> 
                            {featuredMovie?.vote_count || DEFAULT_VOTE_COUNT} votes
                        </span>
                    </div>
                    <p className="text-gray-300 mb-4">{featuredMovie?.overview || DEFAULT_OVERVIEW}</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        WATCH TRAILER
                    </button>
                </div>
            </div>
        </div>
    );
}
