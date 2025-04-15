export interface IMovieList {
  id: number;
    title: string;
    poster: string;
    year: string;
    imdbRating: string;
    tomatoRating: string;
    genre: string;
    favorite?: boolean;
  }