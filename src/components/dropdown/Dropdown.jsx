import { useState } from "react";
import "./dropdown.scss";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Équipements
          <img
            className={`arrow ${!isOpen ? "rotate-arrow" : ""}`}
            src="./src/assets/smallArrow.svg"
            alt="fleche de dérourelement menu"
          />
        </button>
        <ul className={`dropdown-menu ${!isOpen ? "dropdown-close" : ""}`}>
          <li>Climatisation</li>
          <li>Wi-Fi</li>
          <li>Cuisine</li>
          <li>Espace de travail</li>
          <li>Fer à repasser</li>
          <li>Sèche-cheveux</li>
          <li>Cintres</li>
        </ul>
      </div>
    </>
  );
}
