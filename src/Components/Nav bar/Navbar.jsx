import { FaTimes, FaBars} from "react-icons/fa";

import { useRef, useState } from "react";
import "./Navbar.css"
export const Navbar = () => {
    const [srclogo, setSrclogo] = useState("srclogo.png")
    const navRef = useRef();
    const hambar = document.querySelectorAll('.hambar')

    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
        hambar.forEach(e=>{
          e.classList.toggle("active")
        })
    }

  return (
    <>
  <header className="nav_head">
    <div className="nav_logo flex items-center gap-3 font-[Poppins] z-40">
        <img src="mcetlogo.png" alt="logo" className="w-26 h-18 " />
        <span className="w-[1px] h-[50%] bg-gray-300 rounded-md"></span>
        <div className="flex items-center gap-3">
          <img src="srclogo.png" alt="logo" className="logo w-19  " />
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-1 text-gray-500">Dr.Mahalingam College of Engineering and Technology</p>
            <p className="text-2xl font-semibold mb-0">Student Research Council</p>
          </div>
        </div>
    </div>
    {/* <div className="flex items-center">
      <img src="mcetlogo.png" alt="logo" className="w-32" />
    </div> */}
    <nav id="nav" ref={navRef}>
        <a href="/#" onClick={showNavbar}>Facilities</a>
        <a href="/#" onClick={showNavbar}>Team</a>
        <a href="/#" onClick={showNavbar}>About</a>
        <a href="/#" onClick={showNavbar}>Events</a>
        <a href="/#" onClick={showNavbar}>Feedback</a>
        {/* <button className="involved">Get Involved</button> */}
          {/* <button onClick={showNavbar} className="nav-btn nav-cls-btn">
              <div></div>
              <div></div>
              <div></div>
          </button> */}
         
    </nav>
    <button onClick={showNavbar} className="nav-btn">
            <div className="hambar"></div>
            <div className="hambar"></div>
            <div className="hambar"></div>
    </button>
  </header>
  </>
  )
}
