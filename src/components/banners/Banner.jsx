import "./homebanner.scss";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <img
          className="imgBanner"
          src="../src/assets/image2.jpg"
          alt="photographie d'une chaine de montagne"
        />
        <div className="imgOpacity"></div>
      </div>
    </>
  );
}
