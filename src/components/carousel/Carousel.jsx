/* eslint-disable react/prop-types */
import { useState } from "react";
import "./carousel.scss";

export default function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    // Afficher un message ou un placeholder si aucune image n'est disponible
    // eslint-disable-next-line react/no-unescaped-entities
    return <div>Pas d'images disponibles</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Incrémente l'index et boucle à 0 si on dépasse le nombre d'images
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1; // Si l'index est 0, revient à la dernière image
      return prevIndex - 1; // Décrémente l'index
    });
  };
  return (
    <>
      <div className="carousel">
        <img
          className="carouselImg"
          src={images[currentImageIndex]}
          alt="Photographie du logement"
        />
        <div className="carouselNav">
          <img
            className="navArrow left-arrow"
            src="../src/assets/left-arrow.svg"
            alt="image pécédente"
            onClick={prevImage}
          />
          <img
            className="navArrow right-arrow"
            src="../src/assets/right-arrow.svg"
            alt="image pécédente"
            onClick={nextImage}
          />
          <p className="carousel-number">
            {currentImageIndex + 1}/{images.length}
          </p>
        </div>
      </div>
    </>
  );
}
