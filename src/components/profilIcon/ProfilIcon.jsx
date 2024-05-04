import "./profilIcon.scss";

export default function ProfilIcon() {
  return (
    <>
      <div className="profilIcon">
        <p className="name">
          Alexandre <br />
          Dumas
        </p>
        <img
          className="picture"
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
          alt="photo de profil"
        />
      </div>
    </>
  );
}
