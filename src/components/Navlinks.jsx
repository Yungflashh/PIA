import "../styles/Navlinks.css";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <div className="navContainer">
      <div className="linksMobile">
        <nav>WATCH</nav>
        <nav>ABOUT</nav>
        <nav>BIBLE</nav>
        <nav> <Link to={"/guestMinisters"}>GUEST MINISTERS</Link> </nav>
      </div>
    </div>
  );
};

export default Navlinks;
