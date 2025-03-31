import Footer from "./components/Footer"
import FeaturedCasts from "./components/FeaturedCast";
import ExclusiveVideos from "./components/ExclusiveVideo";
import MoviesList from "./components/MoviesList";
import FeaturedMovieList from "./components/FeaturedMovieList";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
    <Navbar/>
    <FeaturedMovieList/>
    <MoviesList/>
    <ExclusiveVideos/>
    <FeaturedCasts/>
    <Footer/>
    </>
  );
}


