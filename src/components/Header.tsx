import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Poster from "../assets/Header/Poster.png";
import IMDB from "../assets/Header/IMDB.png";
import Tomatoes from "../assets/Header/Tomatoes.png";

const API_KEY = "9vXmr2lxYbpLlmjIN5jJs6OvCWGHtQnRYJAwnTjG";
const API_HOST = "https://api.watchmode.com";

interface Movie {
    title: string;
    backdrop_path: string;
    overview: string;
    vote_average: number;
    vote_count: number;
}

const DEFAULT_MOVIE: Movie = {
    title: "John Wick 3 : Parabellum",
    backdrop_path: "",
    overview: "John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere..",
    vote_average: 86.0,
    vote_count: 97,
};

export default function Header() {
    const [movieQuery, setMovieQuery] = useState("");
    const [featuredMovie, setFeaturedMovie] = useState<Movie>(DEFAULT_MOVIE);
    const [poster, setPoster] = useState<string>(Poster);
    const navigate = useNavigate();

    async function fetchMovie(movieName: string): Promise<void> {
        try {
            const response = await fetch(
                `${API_HOST}/3/search/movie?query=${movieName}&api_key=${API_KEY}`
            );
            

            if (!response.ok) {
                throw new Error("Could not fetch movie data");
            }

            const data = await response.json();
            if (data.results.length > 0) {
                const movie = data.results[0];
                setFeaturedMovie(movie);
                setPoster(`https://api.watchmode.com/t/p/original${movie.backdrop_path}`);
            } else {
                setFeaturedMovie(DEFAULT_MOVIE);
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
            <Navbar query={movieQuery} setQuery={setMovieQuery} handleSearch={handleSearch} />
            <div className="relative w-full h-full flex flex-col justify-center items-start px-12">
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-225">
                    <img
                        src={poster}
                        alt={featuredMovie.title}
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>
                <div className="bg-transparent p-6 text-white max-w-lg rounded-lg shadow-lg relative z-10">
                    <h1 className="text-4xl font-bold mb-2">{featuredMovie.title}</h1>
                    <div className="flex items-center space-x-4 mb-4">
                        <span className="flex items-center gap-2 text-yellow-400 px-2 py-1 rounded text-sm">
                            <img src={IMDB} alt="IMDb" className="w-8 h-4" />
                            {featuredMovie.vote_average.toFixed(1)}/100
                        </span>
                        <span className="flex justify-center gap-2 text-sm">
                            <img src={Tomatoes} className="w-4 h-4"/> 
                            {featuredMovie.vote_count} votes
                        </span>
                    </div>
                    <p className="text-gray-300 mb-4">{featuredMovie.overview}</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        WATCH TRAILER
                    </button>
                </div>
            </div>
        </div>
    );
}
