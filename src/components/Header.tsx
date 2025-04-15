import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Poster from '../assets/images/header-poster.png';
import IMDB from '../assets/icons/imdb.svg';
import Tomatoes from '../assets/icons/tomatoes.svg';
import { API_KEY, API_HOST } from '../config/envConfig';
import { DEFAULT_MOVIE } from '../utils/constant';
import { IMovie } from '../types/movie';

export default function Header() {
	const [movieQuery, setMovieQuery] = useState('');
	const [featuredMovie, setFeaturedMovie] = useState<IMovie>(DEFAULT_MOVIE);
	const [poster, setPoster] = useState<string>(Poster);
	const navigate = useNavigate();

	async function fetchMovie(movieName: string): Promise<void> {
		try {
			const response = await fetch(
				`${API_HOST}search/?apiKey=${API_KEY}&search_field=name&search_value=${encodeURIComponent(movieName)}`
			);

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(`Error ${response.status}: ${errorText}`);
			}

			const data = await response.json();
			console.log('Fetched movie data:', data);

			if (data.title_results.length > 0) {
				const movie = data.title_results[0];

				setFeaturedMovie({
					title: movie.title || 'Unknown Title',
					backdropPath: movie.imageUrl || '',
					overview: movie.plotOverview || 'No overview available.',
					year: movie.year,
					voteAverage: movie.userRating || 0,
					voteCount: movie.voteCount || 0
				});

				setPoster(movie.imageUrl || Poster);
			} else {
				setFeaturedMovie(DEFAULT_MOVIE);
				setPoster(Poster);
			}
		} catch (error) {
			console.error('Error fetching movie:', error);
		}
	}

	function handleSearch(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (movieQuery.trim()) {
			fetchMovie(movieQuery);
			navigate(`/search?q=${movieQuery}`, { replace: true });
		}
	}

	return (
		<div className="relative w-full h-[100vh] text-white">
			<Navbar query={movieQuery} setQuery={setMovieQuery} handleSearch={handleSearch} />
			<div className="relative w-full h-full flex flex-col justify-center items-start px-12">
				<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-225">
					<img src={poster} alt={featuredMovie.title} className="w-full h-full object-cover opacity-80" />
				</div>
				<div className="bg-transparent p-6 text-white max-w-lg rounded-lg shadow-lg relative z-10">
					<h1 className="text-4xl font-bold mb-2">{featuredMovie.title}</h1>
					<div className="flex items-center space-x-4 mb-4">
						<span>Movie Year: {featuredMovie.year}</span>
						<span className="flex items-center gap-2 text-yellow-400 px-2 py-1 rounded text-sm">
							<img src={IMDB} alt="IMDb" className="w-8 h-4" />
							{featuredMovie.voteAverage?.toFixed(1) || 0}/100
						</span>
						<span className="flex justify-center gap-2 text-sm">
							<img src={Tomatoes} className="w-4 h-4" />
							{featuredMovie.voteCount || 0} votes
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
