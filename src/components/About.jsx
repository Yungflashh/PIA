
import "../styles/AboutPage.css" // Import the CSS file
import founder from "../assets/jpg/founder.jpg"

const About= () => {
  return (
    <div className="container">
      <div className="profile-container">
        {/* Image */}
        <img
          src={founder}// Replace with the actual image URL
          alt="Prophetess Dr. Esther Olaseinde Adenusi"
          className="profile-image"
        />
      </div>

      <div className="biography-container">
        <h1 className="header">Prophetess Dr. Esther Olaseinde Adenusi (JP)</h1>

        <p className="biography-text">
          Prophetess Dr. Esther Olaseinde Adenusi, affectionately known as Prophetess E.O. Adenusi (JP), is a steadfast woman of God and a beacon of hope for many. With 23 years of ministry experience, she has navigated numerous challenges, emerging victorious through unwavering faith and God's grace.
        </p>

        <p className="biography-text">
          As the founder of Tower of Victory Church International, Prophetess Esther has dedicated her life to spreading the Gospel. Her ministry is characterized by powerful miracles and healing, reflecting her deep commitment to fulfilling God's calling. Alongside her husband, a dedicated teacher and the senior pastor of the church, they have nurtured a thriving community rooted in faith.
        </p>

        <p className="biography-text">
          Born in Ondo State, Ilaje, Tebu Manua, Prophetess Esther is the fourth of six children. Her humility and dedication to service have inspired her family, including her four children—three boys and a girl—who actively support her ministry, ensuring its continual growth.
        </p>

        <p className="biography-text">
          A graduate of Life Bible College in Ikorodu, she has been equipped with gifts in teaching and counseling, enabling her to impact lives profoundly. Her love for worship through singing and dancing reflects her desire to dwell in the presence of God.
        </p>

        <p className="biography-text">
          Prophetess Esther’s vision extends beyond the church; she aims to share the Gospel until eternity. Her travels to Jerusalem, twice, further signify her passion for deepening her faith and understanding of God's works. In recognition of her remarkable contributions, she was awarded a doctorate degree for the signs and wonders manifested through her ministry.
        </p>

        <p className="biography-text">
          With a heart full of compassion and a commitment to God’s service, Prophetess Dr. Esther Olaseinde Adenusi remains an exemplar of faith and resilience, dedicated to uplifting others and advancing the Kingdom of God.
        </p>
      </div>
    </div>
  );
};

export default About;
