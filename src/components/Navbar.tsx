import { FormEvent } from "react";
import { useState } from "react";
import logo from "../assets/Header/logo.png";
import search from "../assets/Header/Search.png";
import icon from "../assets/Header/Icon.png";
import { useDispatch,useSelector } from "react-redux";
import {RootState} from "../redux/store";
import { removeSearchedMovie } from "../redux/searchSlice";

interface NavbarProps {
    query: string;
    setQuery: (value: string) => void;
    handleSearch: (e: FormEvent<HTMLFormElement>) => void;
}

export default function Navbar({ query, setQuery, handleSearch }: NavbarProps){
    const [isFocused, setIsFocused] = useState(false);
    const recentMovies = useSelector((state: RootState)=>state.search.searchedMovies)
    const dispatch = useDispatch();
    return (
        <nav className="w-full flex items-center justify-between px-8 py-4 fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-15">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
                <img src={logo} alt="MovieBox" className="w-10 h-10" />
                <h1 className="text-white text-2xl font-bold">Movie Box</h1>
            </div>

            {/* Center: Search Bar */}
            <form
                onSubmit={handleSearch}
                className="flex items-center w-[600px] border rounded-full border-gray-300 px-4"
            >
                <input
                    type="text"
                    placeholder="What do you want to watch?"
                    className="w-full bg-transparent text-white p-2 outline-none"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={()=> setIsFocused(true)}
                    onBlur={()=> setTimeout(()=> setIsFocused(false),150)}
                />
                <button type="submit" className="text-gray-400 hover:text-white">
                    <img src={search} alt="Search" />
                </button>
            </form>
            {isFocused && recentMovies.length > 0 && (
  <ul className="absolute top-full left-20 right-20 bg-gray-800 border border-gray-600 text-white rounded-b-lg max-h-60 overflow-y-auto z-10">
    {recentMovies.slice().reverse().map((movie, index) => (
      <li
        key={index}
        className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer text-sm"
      >
        <span
          onMouseDown={() => setQuery(movie.name)}
        >
          {movie.name}
        </span>
        <button
          onMouseDown={() => dispatch(removeSearchedMovie(movie.name))}
          className="ml-2 text-gray-400 hover:text-red-600"
        >
          X
        </button>
      </li>
    ))}
  </ul>
)}


            {/* Right: Sign In & Menu */}
            <div className="flex items-center space-x-4">
                <span className="text-white text-lg cursor-pointer">Sign In</span>
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-full cursor-pointer">
                    <img src={icon} alt="Menu" />
                </div>
            </div>
        </nav>
    );
}
