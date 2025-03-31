import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeaturedCasts from "./components/FeaturedCast";
import ExclusiveVideos from "./components/ExclusiveVideo";
import MoviesList from "./components/MoviesList";
import FeaturedMovieList from "./components/FeaturedMovieList";
import Header from "./components/Header";


export default function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Header />} />
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


