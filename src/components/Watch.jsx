import  { useState, useEffect } from 'react';
import "../styles/Watch.css"
import photo1 from '../assets/images/photo1.jpg';
import photo2 from '../assets/images/photo2.jpg';
import photo3 from '../assets/images/photo3.jpg';
import photo4 from '../assets/images/photo4.jpg';
import photo5 from '../assets/images/photo5.jpg';
import photo6 from '../assets/images/photo6.jpg';
import photo7 from '../assets/images/photo7.jpg';
import photo8 from '../assets/images/photo8.jpg';
import photo9 from '../assets/images/photo9.jpg';
import photo10 from '../assets/images/photo10.jpg';
import photo11 from '../assets/images/photo11.jpg';
import photo12 from '../assets/images/photo12.jpg';
import photo13 from '../assets/images/photo13.jpg';
import photo14 from '../assets/images/photo14.jpg';
import photo15 from '../assets/images/photo15.jpg';
import photo16 from '../assets/images/photo16.jpg';
import photo17 from '../assets/images/photo17.jpg';
import photo18 from '../assets/images/photo18.jpg';
import photo19 from '../assets/images/photo19.jpg';
import photo20 from '../assets/images/photo20.jpg';
import photo21 from '../assets/images/photo21.jpg';
import photo22 from '../assets/images/photo22.jpg';
import photo23 from '../assets/images/photo23.jpg';
import photo24 from '../assets/images/photo24.jpg';
import photo25 from '../assets/images/photo25.jpg';
import photo26 from '../assets/images/photo26.jpg';
import photo27 from '../assets/images/photo27.jpg';
import photo28 from '../assets/images/photo28.jpg';
import photo29 from '../assets/images/photo29.jpg';
import photo30 from '../assets/images/photo30.jpg';
import photo31 from '../assets/images/photo31.jpg';
import photo32 from '../assets/images/photo32.jpg';
import photo33 from '../assets/images/photo33.jpg';
import photo34 from '../assets/images/photo34.jpg';
import photo35 from '../assets/images/photo35.jpg';
import photo36 from '../assets/images/photo36.jpg';
import photo37 from '../assets/images/photo37.jpg';
// import photo38 from '../assets/images/photo38.jpg';
import photo39 from '../assets/images/photo39.jpg';
import photo40 from '../assets/images/photo40.jpg';
import photo41 from '../assets/images/photo41.jpg';
import { Link } from 'react-router-dom';


const photos = [
    photo1, 
photo2, 
photo3, 
photo4, 
photo5, 
photo6, 
photo7, 
photo8, 
photo9, 
photo10, 
photo11, 
photo12, 
photo13, 
photo14, 
photo15, 
photo16, 
photo17, 
photo18, 
photo19, 
photo20, 
photo21, 
photo22, 
photo23, 
photo24, 
photo25, 
photo26, 
photo27, 
photo28, 
photo29, 
photo30, 
photo31, 
photo32, 
photo33, 
photo34, 
photo35, 
photo36, 
photo37, 
// photo38, 
photo39, 
photo40, 
photo41

    
  // Add more photos as needed
];

const PhotoBook = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next photo
  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  useEffect(() => {
    // Set an interval to change photo every 3 seconds
    const interval = setInterval(nextPhoto, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="photo-book">
      <img src={photos[currentIndex]} alt={`Photo ${currentIndex + 1}`} className="photo" />
      <p>Photo {currentIndex + 1} of {photos.length}</p>

    <Link to={"/imageAccess"}> <button>Get My Images</button> </Link>
    </div>
       
    


    <div id="historyText">
        <h2 id="Title">Praise in Advance: 23 Years of Worship</h2>

        <p id="history">
            Praise in Advance began 23 years ago as a powerful moment for worshippers around the world to gather in praises to God. Rooted in <strong>John 4:24</strong>, which emphasizes worshiping in spirit and truth, this annual concert originated from <strong>Tower of Victory Church International</strong>.
        </p>

        <p id="history">
            For the first 18 years, it was simply known as a praise night, a time dedicated to worship. However, for the past five years, the event has officially been tagged "Praise in Advance." This evolution signifies a deeper commitment to praise and has attracted renowned ministers of God and various churches, uniting them in worship and song.
        </p>

        <p id="history">
            Each year, Praise in Advance has been a tremendous blessing, witnessing miraculous testimonies from attendees who experience God’s power at work in their lives through the program. The event is not only a concert; it also features exciting games, including a dance competition where the best dancer wins a prize, along with giveaways like recharge cards.
        </p>

        <p id="history">
            This year marks the 23rd season of Praise in Advance, set to take place in <strong>Ikorodu at the Tower of Victory Church International, Erunwen</strong>, on the <strong>15th of November 2024</strong> starting at <strong>7 PM</strong>. It promises to be the biggest concert in Ikorodu, delivering an unforgettable experience as worshippers come together to invoke the presence of the Most High God. As the saying goes, "When praises go up, blessings come down."
        </p>

        <p id="history" className="event-details">
            Join us for a night of true worship, joy, and divine encounters!
        </p>

        <a href="https://wa.me/2349058949877?text=Hello%2C%20How%20can%20I%20get%20to%20Praise%20in%20Advance%3F" className="cta-button">RSVP for Praise in Advance</a>
    </div>

    </>
  );
};

export default PhotoBook;
