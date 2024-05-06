import "./homebanner.scss";

export default function HomeBanner() {
  return (
    <>
      <div className="banner">
        <img
          className="imgBanner"
          src="../src/assets/image1.jpg"
          alt="photographie d'une plage en bord de falaise"
        />
        <div className="imgOpacity"></div>
        <p className="textBanner">Chez vous, partout et ailleurs</p>
      </div>
    </>
  );
}
