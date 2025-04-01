import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeaturedCasts from "./components/FeaturedCast";
import ExclusiveVideos from "./components/ExclusiveVideo";
import MoviesList from "./components/MoviesList";
import FeaturedMovieList from "./components/FeaturedMovieList";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";


export default function App() {
  return (
    <>
        <Router>
            <Routes>
                {/* Home Page with Featured Movie */}
                <Route path="/" element={<Header />} />
                
                {/* Search Results Page */}
                <Route path="/search" element={<SearchResults/>} />
            </Routes>
        </Router>
    <FeaturedMovieList/>
    <MoviesList/>
    <ExclusiveVideos/>
    <FeaturedCasts/>
    <Footer/>
    </>
  );
}


