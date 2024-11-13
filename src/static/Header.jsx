import { useState } from "react";
import Navlinks from "../components/Navlinks";
import "../styles/Header.css";
import { IoIosMenu, IoIosClose } from "react-icons/io"; 
import { Link } from "react-router-dom";

const Header = () => {
  const [navState, setNavState] = useState(false); 

  const toggleNavBar = () => {
    setNavState(!navState); 
  };

  return (
    <>
      <div className="HeaderContainer">
        <h2>PIA2024</h2>

        <div className="links">
          <nav>WATCH</nav>
          <nav>ABOUT</nav>
          <nav>BIBLE</nav>
          <nav> <Link className="no-underline" to={"/guestMinisters"}>GUEST MINISTERS</Link> </nav>
        </div>

        {/* Toggle between menu and close icon based on navState */}
        <div id="menu" onClick={toggleNavBar}>
          {navState ? <IoIosClose size={60}/> : <IoIosMenu />} {/* Show close icon when navState is true, else show menu */}
        </div>
      </div>

      {/* Render Navlinks component based on navState */}
      {navState && <Navlinks />}
    </>
  );
};

export default Header;
