import ExclusiveVideos from "../components/ExclusiveVideo";
import FeaturedCasts from "../components/FeaturedCast";
import FeaturedMovieList from "../components/FeaturedMovieList";
import MoviesList from "../components/MoviesList";

export default function Home(){
    return(
        <>
        <FeaturedMovieList/>
        <MoviesList/>
        <ExclusiveVideos/>
        <FeaturedCasts/>
        </>
    )
}