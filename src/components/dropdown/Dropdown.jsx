import PropTypes from "prop-types";
import { useState } from "react";
import "./dropdown.scss";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(true); // État pour gérer le dropdown
  const toggleDropdown = () => setIsOpen(!isOpen); // Fonction pour inverser l'état

  return (
    <>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {title}
          <img
            className={`arrow ${!isOpen ? "" : "rotate-arrow"}`}
            src="/src/assets/smallArrow.svg"
            alt="open arrow"
          />
        </button>
        <ul className={`dropdown-menu ${!isOpen ? "dropdown-open" : ""}`}>
          {Array.isArray(content) ? ( // Vérification si le contenu est un tableau
            content.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>{content}</li> // Affichage du contenu s'il n'est pas un tableau
          )}
        </ul>
      </div>
    </>
  );
}

// Déclaration des PropTypes
Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};
