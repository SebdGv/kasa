import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import "./carousel.scss";

export default function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>Pas d&apos;images disponibles</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1;
      return prevIndex - 1;
    });
  };
  return (
    <>
      <div className="carousel">
        {images.length > 1 && (
          <div className="carouselNav">
            <FontAwesomeIcon
              onClick={prevImage}
              icon={faChevronLeft}
              className="navArrow left-arrow"
            />
            <p className="carousel-number">
              {currentImageIndex + 1}/{images.length}
            </p>
            <FontAwesomeIcon
              onClick={nextImage}
              icon={faChevronRight}
              className="navArrow right-arrow"
            />
          </div>
        )}
        <img
          className="carouselImg"
          src={images[currentImageIndex]}
          alt="Photographie du logement"
        />
      </div>
    </>
  );
}
Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
