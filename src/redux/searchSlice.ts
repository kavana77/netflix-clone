import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
	id: number;
	name: string;
	year: number;
	image_url: string;
	overview?: string;
	user_rating?: number;
	vote_count?: number;
}

interface SearchState {
	searchedMovies: Movie[];
}

const initialState: SearchState = {
	searchedMovies: []
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		addSearchedMovie: (state, action: PayloadAction<Movie>) => {
			const exists = state.searchedMovies.some(movie => movie.id === action.payload.id);
			if (!exists) {
				state.searchedMovies.push(action.payload);
			}
		},
		removeSearchedMovie: (state, action: PayloadAction<string>) => {
			state.searchedMovies = state.searchedMovies.filter(movie => movie.name !== action.payload);
		}
	}
});

export const { addSearchedMovie, removeSearchedMovie } = searchSlice.actions;
export default searchSlice.reducer;
