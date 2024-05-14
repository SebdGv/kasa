import { useState } from "react";
import "./dropdown.scss";

// eslint-disable-next-line react/prop-types
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
            // eslint-disable-next-line react/prop-types
            content.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>{content}</li>
          )}
        </ul>
      </div>
    </>
  );
}
