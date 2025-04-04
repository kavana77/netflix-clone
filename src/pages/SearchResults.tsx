import { useState, useEffect } from "react";
import { API_KEY,API_HOST } from "../config/api";


interface Movie {
    id: number;
    name: string;
    year: number;
    image_url: string;
    overview?: string;
    user_rating?: number;
    vote_count?: number;
}

export default function SearchResults() {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("q") || "";
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!searchQuery) return;

        setLoading(true);
        setError(null);

        fetch(`${API_HOST}search/?apiKey=${API_KEY}&search_field=name&search_value=${encodeURIComponent(searchQuery)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("API Response: ", data)
                setMovies(data.title_results || []);
            })
            .catch(err => {
                setError("Failed to fetch movies.");
                console.error("Error fetching movies:", err);
            })
            .finally(() => setLoading(false));
    }, [searchQuery]);

    const movieToDisplay = movies.length > 0 ? movies[0] : null;

    return (
        <div className="container mx-auto px-4 py-6 text-white">
            <h1 className="text-2xl font-bold mb-4">Search Results for "{searchQuery}"</h1>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !movieToDisplay && !error && <p>No results found.</p>}

            {movieToDisplay && (
                <div className="bg-black p-6 rounded-lg shadow-lg space-y-4 max-w-xl mx-auto">
                    {/* Movie Title and Year */}
                    <h3 className="text-2xl font-bold text-white">{movieToDisplay.name} ({movieToDisplay.year})</h3>

                    {/* Movie Overview */}
                    {movieToDisplay.overview && (
                        <p className="text-gray-300 mt-2">{movieToDisplay.overview}</p>
                    )}

                    {/* Ratings and Vote Count */}
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-yellow-400 font-semibold">
                            Rating: {movieToDisplay.user_rating ? movieToDisplay.user_rating.toFixed(1) : "N/A"}/100
                        </span>
                        <span className="text-sm text-gray-400">
                            Votes: {movieToDisplay.vote_count ? movieToDisplay.vote_count : "N/A"}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
