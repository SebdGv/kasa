import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./thumbnail.scss";

export default function Thumbnail({ id, title, cover }) {
  const thumbnailStyle = {
    background: `url(${cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <Link to={`/logement/${id}`}>
        <div className="thumbnail" style={thumbnailStyle}>
          <p className="thumbnailTitle">{title}</p>
        </div>
      </Link>
    </>
  );
}

// Définition des PropTypes pour la validation des props
Thumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
