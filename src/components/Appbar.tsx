import Socials from './Socials';
import { useState, useEffect } from "react";

export default function Appbar(){
   const [scrolling, setScrolling] = useState(false);
   useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return <div className= {`${scrolling ? ' backdrop-blur-lg bg-opacity-30' : 'bg-zinc-950'} flex justify-between  h-20 sticky top-0 `}>
         <div className="text-white  ml-7">
            
            <h2 className = "font-dancing-script text-3xl p-3 mt-2 ml-7 ">Avishek Saha</h2>
         </div>
         <div className="text-white p-3 flex justify-between md:flex-row font-montserrat font-bold text-lg mr-14">
         <div className="p-3 hover:text-green-500">About</div>
            <div className="p-3 hover:text-green-500 cursor-pointer">Projects</div>
            <div className="p-3 hover:text-green-500 cursor-pointer">Skills</div>
            <div className="p-3 hover:text-green-500 cursor-pointer">Contact</div>
            <div className="p-3 hover:text-green-500"><Socials/></div>
            </div>
    </div>
}