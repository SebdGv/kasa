import "./profilIcon.scss";

// eslint-disable-next-line react/prop-types
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
