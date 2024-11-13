import "../styles/Herosection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="heroSectionContainer">
      <h2 className="heroText">PRAISE IN ADVANCE 23.0</h2>
      <button className="programButton"> <Link  className="no-underline" to={"/program"}> VIEW ORDER OF PROGRAM</Link> </button>
    </div>
  );
};

export default HeroSection;
