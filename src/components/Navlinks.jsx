import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navlinks.css";

const Navlinks = () => {
  // State to control the visibility of the navbar
  const [isNavVisible, setIsNavVisible] = useState(true);

  // Function to hide the navbar when a link is clicked
  const handleLinkClick = () => {
    setIsNavVisible(false);
  };

  return (
    <>
      {isNavVisible && (
        <div className="navContainer">
          <div className="linksMobile">
            <nav>
              <Link  className="no-underline" to="/" onClick={handleLinkClick}>
                WATCH
              </Link>
            </nav>
            <nav>
              <Link  className="no-underline" to="/about" onClick={handleLinkClick}>
                ABOUT
              </Link>
            </nav>
            <nav>
              <Link  className="no-underline" to="/bible" onClick={handleLinkClick}>
                BIBLE
              </Link>
            </nav>
            <nav>
              <Link  className="no-underline" to="/guestMinisters" onClick={handleLinkClick}>
                GUEST MINISTERS
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navlinks;
