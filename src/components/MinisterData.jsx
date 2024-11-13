
import ProfileCard from './ProfileCard'; // Make sure to import the ProfileCard component
import juwon from "../assets/jpg/juwon.jpg"
import beloved from "../assets/jpg/beloved.jpg"

const MinisterData = () => {
  const ministerData = [
    {
      name: 'JUWON PRAISE',
      image: juwon,
      bio: 'Juwon praise is a powerful praise leader and song minister, renowned for her energetic, spirit-filled worship that uplifts and inspires. With a deep love for God and a calling to lead others into His presence, she brings both passion and devotion to every gathering. A dedicated health practitioner, she embodies compassion and care in all she does.'
    },
    {
      name: 'BELOVED (OGO AMI)',
      image: beloved,
      bio: 'BELOVED OGOAMI is filled with sound and  called by God to lead his people into deep prophetic encounter with the Father. BELOVED OGOAMI is the visioneer of BELOVED MUSIC MINISTRY and BELOVED TEENS MINISTRY.She has released some powerful and inspirational songs which includes EMI MIMO DUN, KING OF GLORY, ERU RE BAMI and so on.She is a woman of God who believes in the word "GOD FIRST" From an early age, Ayodeji Sampraiz has carried a profound passion for music and ministry. Starting to sing in the Choir at the tender age of 8. Ayodeji Sampraiz began to develop his gift, growing in both talent and spiritual depth. During his fourth year at the University of Lagos, he served as the music director of his fellowship, leading worship and music with excellence. His leadership continued during his service year in Kebbi, Nigeria, where he was appointed as the music director of his zone.Currently, Ayodeji Sampraiz is a committed member of Celebration Church International, where he contributes actively by serving in the media department. A gifted songwriter, Ayodeji Sampraiz has written numerous songs, with five of them produced so far, including the well-known and impactful "Enibafere." Through his music, Ayodeji Sampraiz seeks to ignite the fire of God across the nations, ministering with authority and power, and proclaiming the name of Jesus to his generation.His ultimate goal is to inspire a deeper connection to God through worship and to create music that transforms lives by drawing people into the presence of God.'
    },

    {
        name: 'AYODEJI SAMPRAIZ',
        image: "https://via.placeholder.com/200x300",
        bio: 'From an early age, Ayodeji Sampraiz has carried a profound passion for music and ministry. Starting to sing in the Choir at the tender age of 8. Ayodeji Sampraiz began to develop his gift, growing in both talent and spiritual depth. During his fourth year at the University of Lagos, he served as the music director of his fellowship, leading worship and music with excellence. His leadership continued during his service year in Kebbi, Nigeria, where he was appointed as the music director of his zone.Currently, Ayodeji Sampraiz is a committed member of Celebration Church International, where he contributes actively by serving in the media department. A gifted songwriter, Ayodeji Sampraiz has written numerous songs, with five of them produced so far, including the well-known and impactful "Enibafere." Through his music, Ayodeji Sampraiz seeks to ignite the fire of God across the nations, ministering with authority and power, and proclaiming the name of Jesus to his generation.His ultimate goal is to inspire a deeper connection to God through worship and to create music that transforms lives by drawing people into the presence of God.'
      },

      {
        name: 'DANNYT',
        image: "https://via.placeholder.com/200x300",
        bio: 'Pastor Daniel Adenusi is a lover of God and good music, his exposure to music started at an early age and has been composing songs for many years . He is an incredible worshipper and energetic praiser and has contributed immensely to the development and progress of his local church music department, without mincing words he understoods how to make the best food that God likes whenever he enters into the Kitchen of Praise.'
      },
  ];

  return (
    <div className="MinisterDiv">
      {ministerData.map((minister, index) => (
        <ProfileCard
          key={index}
          name={minister.name}
          image={minister.image}
          bio={minister.bio}
        />
      ))}
    </div>
  );
};

export default MinisterData;
