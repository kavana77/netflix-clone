import { useEffect } from 'react';
import Home from '../pages/home.tsx';
import { useLocation } from 'react-router-dom';
import { API_KEY, API_HOST } from '../config/envConfig';
import { useDispatch } from 'react-redux';
import { addSearchedMovie } from '../redux/searchSlice';

export default function SearchResults() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const searchQuery = queryParams.get('q') || '';
	const dispatch = useDispatch();

	useEffect(() => {
		if (!searchQuery) return;
		fetch(`${API_HOST}search/?apiKey=${API_KEY}&search_field=name&search_value=${encodeURIComponent(searchQuery)}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`Error ${response.status}: ${response.statusText}`);
				}
				return response.json();
			})
			.then(data => {
				const results = data.title_results || [];

				if (results.length > 0) {
					dispatch(addSearchedMovie(results[0]));
				}
			})
			.catch(err => {
				console.error('Error fetching movies:', err);
			})
			.finally();
	}, [searchQuery, dispatch]);

	return (
		<>
			<Home />
		</>
	);
}
