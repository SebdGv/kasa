import { Link } from "react-router-dom";
import "./thumbnail.scss";

export default function Thumbnail() {
  return (
    <>
      <Link to="/logement">
        <div className="thumbnail">
          <p className="thumbnailTitle">
            Titre de la <br /> location
          </p>
        </div>
      </Link>
    </>
  );
}
