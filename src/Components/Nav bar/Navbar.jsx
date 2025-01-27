import { FaTimes, FaBars} from "react-icons/fa";

import { useRef, useState } from "react";
import "./Navbar.css"
export const Navbar = () => {
    const [srclogo, setSrclogo] = useState("srclogo.png")
    const navRef = useRef();

    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <>
  <header className="nav_head">
    <div className="nav_logo">
        <img src="srcweblogo.svg" alt="logo" className="logo" />
    </div>
    <nav id="nav" ref={navRef}>
        <a href="/#" onClick={showNavbar}>Facilities</a>
        <a href="/#" onClick={showNavbar}>Team</a>
        <a href="/#" onClick={showNavbar}>About</a>
        <a href="/#" onClick={showNavbar}>Events</a>
        <a href="/#" onClick={showNavbar}>Feedback</a>
        {/* <button className="involved">Get Involved</button> */}
        <button onClick={showNavbar} className="nav-btn nav-cls-btn">
            <FaTimes/>
        </button>
         
    </nav>
    <button onClick={showNavbar} className="nav-btn">
        <FaBars/>
    </button>
  </header>
  </>
  )
}
