import "./carousel.scss";

export default function Carousel() {
  return (
    <>
      <div className="carousel">
        <img
          className="carouselImg"
          src="../src/assets/background.jpg"
          alt="Photographie du logement"
        />
        <div className="carouselNav">
          <img
            className="navArrow left-arrow"
            src="../src/assets/left-arrow.svg"
            alt="image pécédente"
          />
          <img
            className="navArrow right-arrow"
            src="../src/assets/right-arrow.svg"
            alt="image pécédente"
          />
          <p className="carousel-number">1/4</p>
        </div>
      </div>
    </>
  );
}
