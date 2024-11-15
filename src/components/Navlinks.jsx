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
              <Link  className="no-underline" to="/watch" onClick={handleLinkClick}>
                Watch
              </Link>
            </nav>
            <nav>
              <Link  className="no-underline" to="/about" onClick={handleLinkClick}>
                Meet the Founder
              </Link>
            </nav>
            <nav>
              <Link  className="no-underline" to="/bible" onClick={handleLinkClick}>
                Bible
              </Link>
            </nav>
            <nav>
              <Link  className="no-underline" to="/guestMinisters" onClick={handleLinkClick}>
                Guest Ministers
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navlinks;
