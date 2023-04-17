import React, {useState} from "react";
//icons
import {RiGovernmentFill,RiMenu3Fill,RiCloseFill} from "react-icons/ri";

const Header =()=>{

    const [showMenu, setShowMenu ] = useState(false)

    return( 
    
    
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
        <div className="xk:w-1/6 text-center -mt-4">
            <a href="#" className="text-2xl font-bold relative">OCACOPLUS <span className="text-primary text-5xl">.</span>
            <RiGovernmentFill className="absolute -left-2 -bottom-3 text-primary "/></a>
        </div>
        <nav className={`fixed bg-white-200 w-[80%] md:w-[40%]
        xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col
         xl:flex-row items-center justify-center gap-10 transition-all`}>
            
            <a href="#" className="">Home</a>
            <a href="#" className="">The institution</a>
            <a href="#" className="">Careers</a>
            <a href="#" className="">Students</a>
        </nav>
        <button onClick={()=> setShowMenu(!showMenu)} className="text-2xl p-2 ">
            {showMenu? <RiCloseFill/>:<RiMenu3Fill/>}</button>
    </header>)
}

export default Header;