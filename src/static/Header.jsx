import { useState } from "react";
import Navlinks from "../components/Navlinks";
import { IoMdHome } from "react-icons/io";
import "../styles/Header.css";
import { IoIosMenu, IoIosClose } from "react-icons/io"; 
import { Link } from "react-router-dom";

const Header = () => {
  const [navState, setNavState] = useState(false); 

  const toggleNavBar = () => {
    setNavState(!navState); 
  };
  const handleLinkClick = () => {
    setIsNavVisible(false);
  };

  return (
    <>
      <div className="HeaderContainer">
        <h2> <Link  className="no-underline" to={"/"}> <IoMdHome /> PIA2024 </Link> </h2>

        <div className="links">
        <nav>
              <Link  className="no-underline" to="/watch" >
                Watch
              </Link>
            </nav>
            <nav>
              <Link  className="no-underline" to="/about" >
                Meet the Founder
              </Link>
            </nav>
            <nav>
              <Link  className="no-underline" to="/bible" >
                Bible
              </Link>
            </nav>
            <nav>
              <Link  className="no-underline" to="/guestMinisters" >
                Guest Ministers
              </Link>
            </nav>
          
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
