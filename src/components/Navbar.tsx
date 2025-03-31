import logo from "../assets/Header/logo.png"
import search from "../assets/Header/Search.png"
import icon from "../assets/Header/Icon.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Navbar(){
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    function handleSearch(e: React.FormEvent){
        e.preventDefault()
        if(query.trim()){
            navigate(`/search?q:${query}`)
        }
    }
    return(

        <nav className="w-full flex items-center justify-between px-8 fixed-top z-50 bg-transparent">
            {/* Left-logo */}
            <div className="flex items-center space-x-2">
                <img src={logo} alt="MovieBox" className="w-10 h-10"/>
                <h1 className="text-white text-2xl font-bold">Movie Box</h1>
            </div>
            {/* Center-Search Bar */}
            <form onSubmit={handleSearch} className="flex items-center w-[600px] border rounded-full border-gray-300  px-4">
                <input type="text" 
                placeholder="What do you want to watch?" 
                className="w-full bg-transparent text-white p-2 outline-none"
                value={query}
                onChange={(e)=> setQuery(e.target.value)}/>
                <button type="submit" className="text-gray-400 hover:text-white">
                    <img src={search}/>
                </button>
            </form>
            {/* Right: Sign In & Menu */}
            <div className="flex items-center space-x-4">
                <span className="text-white text-lg">Sign In</span>
                {/* Menu Icon with Red Circular Background */}
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-full ">
                    <img src={icon}/>
                </div>
            </div>
        </nav>
    )
}