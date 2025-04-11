import { icons } from "../utils/constant"


export default function Footer(){

    return(
        <footer className="text-center py-6">
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-4">
                <img src={icons.facebook} alt="Facebook" className="w-[24px] h-[27.43px] cursor-pointer"/>
                <img src={icons.instagram} alt="Facebook" className="w-[24px] h-[27.43px] cursor-pointer"/>
                <img src={icons.twitter} alt="Facebook" className="w-[24px] h-[24px] cursor-pointer"/>
                <img src={icons.youtube} alt="Facebook" className="w-[24px] h-[21.33] cursor-pointer"/>
            </div>
            {/* Links */}
            <div className="flex justify-center space-x-6 text-sm mb-2">
                <a href="#" className="hover:underline">Conditions of Use</a>
                <a href="#" className="hover:underline">Privacy and Policy</a>
                <a href="#" className="hover:underline">Press Room</a>
            </div>
            {/* copyright */}
            <p className="text-xs mt-4">© 2021 MovieBox by Adriana Eka Prayudha</p>
        </footer>
    )
}
