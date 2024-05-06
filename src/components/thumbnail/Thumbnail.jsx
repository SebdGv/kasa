import { Link } from "react-router-dom";
import "./thumbnail.scss";

// eslint-disable-next-line react/prop-types
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
