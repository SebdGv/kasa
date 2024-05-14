import PropTypes from "prop-types";
import "./profilIcon.scss";

export default function ProfilIcon({ hostName, hostPicture }) {
  return (
    <>
      <div className="profilIcon">
        <p className="name">{hostName}</p>
        <img className="picture" src={hostPicture} alt="photo de profil" />
      </div>
    </>
  );
}

// Déclaration des PropTypes
ProfilIcon.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPicture: PropTypes.string.isRequired,
};
