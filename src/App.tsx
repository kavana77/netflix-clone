import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResult";
import FeaturedCasts from "./components/FeaturedCast";
import ExclusiveVideos from "./components/ExclusiveVideo";
import MoviesList from "./components/MoviesList";
import FeaturedMovieList from "./components/FeaturedMovieList";

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
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


