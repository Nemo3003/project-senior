import {RiGovernmentFill} from "react-icons/ri";

const Header =()=>{
    return( 
    
    
    <header className="flex items-center w-full p-4 h-[10vh]">
        <div className="w-1/6 text-center">
            <a href="#"><span className="text-2xl font-bold relative">OCACOPLUS <span className="text-primary text-5xl">.</span>
            <RiGovernmentFill className="absolute -left-2 -bottom-3 text-primary "/></span></a>
        </div>
        <nav className="flex-1 flex items-center justify-center gap-10">
            <a href="#" className="">Home</a>
            <a href="#" className="">The institution</a>
            <a href="#" className="">Careers</a>
            <a href="#" className="">Students</a>
        </nav>
    </header>)
}

export default Header;