
import '../styles/ProfileCard.css'; // Import custom CSS for styling

const ProfileCard = ({ name, image, bio,whatsapp }) => {
  return (
    <div className="profile-card">
      <img className="profile-image" src={image} alt={name} />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-bio">{bio}</p>
        <a href= {whatsapp}>  <button>   Get in touch  </button> </a>
      </div>
    </div>
  );
};

export default ProfileCard;
