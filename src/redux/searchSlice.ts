import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IMovie {
	id: number;
	name: string;
	year: number;
	imageUrl: string;
	overview?: string;
	userRating?: number;
	voteCount?: number;
}

interface SearchState {
	searchedMovies: IMovie[];
}

const initialState: SearchState = {
	searchedMovies: []
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		addSearchedMovie: (state, action: PayloadAction<IMovie>) => {
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
