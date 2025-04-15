// FeaturedCast
import Keanu from '../assets/images/keanuReeves.png';
import Ryan from '../assets/images/ryanReynoilds.png';
import Timothee from '../assets/images/timothee.png';
import Chloe from '../assets/images/chloeGrace.png';
import { ICast } from '../types/cast';

// ExclusiveVideos
import lamb from '../assets/images/thumbnails1.png';
import suicidesquad from '../assets/images/thumbnails2.png';
import horror from '../assets/images/thumbnails3.png';
import { IVideo } from '../types/video';

// FeaturedMovie
import stranger from '../assets/images/stranger-things.png';
import batman from '../assets/images/batman.png';
import SpiderMan from '../assets/images/spiderman.png';
import Dunkirk from '../assets/images/dumkirk.png';
import { IMovieList } from '../types/movieList.';

// Footer
import facebookIcon from '../assets/icons/facebookIcon.svg';
import instagramIcon from '../assets/icons/instagramIcon.svg';
import twitterIcon from '../assets/icons/twitterIcon.svg';
import youtubeIcon from '../assets/icons/youtubeIcon.svg';

import { IMovie } from '../types/movie';

// newArrival
import dune from '../assets/images/dune.png';
import noTimeToDie from '../assets/images/noTimeToDie.png';
import shangChi from '../assets/images/shang-chi.png';
import dontBreathe from '../assets/images/dont-breathe.png';

export const casts: ICast[] = [
	{ name: 'Keanu Reeves', image: Keanu },
	{ name: 'Ryan Reynolds', image: Ryan },
	{ name: 'Timothée Chalamet', image: Timothee },
	{ name: 'Chloë Grace Moretz', image: Chloe }
];

export const videos: IVideo[] = [
	{
		title: 'Lamb (2021) Trailer',
		thumbnail: lamb,
		videoUrl: 'https://www.youtube.com/watch?v=hnEwJKVWjFM'
	},
	{
		title: 'The Suicide Squad: John Cena Interview',
		thumbnail: suicidesquad,
		videoUrl: 'https://www.youtube.com/watch?v=Xk8FAD_jPc4'
	},
	{
		title: 'Will there be a new era of horror?',
		thumbnail: horror,
		videoUrl: 'https://www.youtube.com/embed/vs0MeU-H3mE'
	}
];

export const movies: IMovieList[] = [
	{
		title: 'Stranger Things',
		poster: stranger,
		year: 'USA, 2016',
		imdbRating: '860/100',
		tomatoRating: '97%',
		genre: 'Action, Adventure, Horror',
		favorite: false
	},
	{
		title: 'Batman Begins',
		poster: batman,
		year: 'USA, 2025',
		imdbRating: '82.0/100',
		tomatoRating: '70%',
		genre: 'Action, Adventure',
		favorite: false
	},
	{
		title: 'Spider-Man : Into The Spider Verse',
		poster: SpiderMan,
		year: 'USA, 2018',
		imdbRating: '84.0/100',
		tomatoRating: '87%',
		genre: 'Animation,Action, Adventure',
		favorite: false
	},
	{
		title: 'Dunkirk',
		poster: Dunkirk,
		year: 'USA, 2017',
		imdbRating: '78.0/100',
		tomatoRating: '94%',
		genre: 'Action, Drama, History',
		favorite: false
	}
];

export const icons = {
	facebook: facebookIcon,
	instagram: instagramIcon,
	twitter: twitterIcon,
	youtube: youtubeIcon
};

export const DEFAULT_MOVIE: IMovie = {
	title: 'John Wick 3 : Parabellum',
	backdropPath: '',
	overview: 'John Wick is on the run after killing a member of the international assassins guild...',
	year: 0,
	voteAverage: 86.0,
	voteCount: 97
};

export const MOVIE_LIST: IMovieList[] = [
	{
		title: 'Dune',
		poster: dune,
		year: 'USA, 2021',
		imdbRating: '840/100',
		tomatoRating: '75%',
		genre: 'Action, Adventure, Drama',
		favorite: false
	},
	{
		title: 'No Time To Die',
		poster: noTimeToDie,
		year: 'USA, 2021',
		imdbRating: '760/100',
		tomatoRating: '68%',
		genre: 'Action, Adventure, Thriller',
		favorite: true
	},
	{
		title: 'Shang-Chi and the Legend of the Ten Rings',
		poster: shangChi,
		year: 'USA, 2021',
		imdbRating: '790/100',
		tomatoRating: '71%',
		genre: 'Action, Adventure, Fantasy',
		favorite: false
	},
	{
		title: "Don't Breathe 2",
		poster: dontBreathe,
		year: 'USA, 2021',
		imdbRating: '610/100',
		tomatoRating: '46%',
		genre: 'Action, Drama, Horror',
		favorite: false
	}
];
