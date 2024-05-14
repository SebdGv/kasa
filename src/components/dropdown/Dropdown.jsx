import PropTypes from "prop-types";
import { useState } from "react";
import "./dropdown.scss";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen(!isOpen);

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
          {Array.isArray(content) ? (
            content.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>{content}</li>
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
