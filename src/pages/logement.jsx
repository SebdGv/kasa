import { useParams } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import Dropdown from "../components/dropdown/Dropdown";
import ProfilIcon from "../components/profilIcon/ProfilIcon";
import Rating from "../components/rating/rating";
import TagName from "../components/tagname/TagName";
import logements from "../data/logements.json";
import NotFound from "./error";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  if (!logement) {
    return <NotFound />;
  }

  return (
    <>
      <div className="pagesContainer">
        <Carousel />

        <div className="logTitle">
          <h1 className="title">{logement.title}</h1>
          <div className="logLocation">{logement.location}</div>
        </div>
        <div className="logTags">
          {/* Afficher les tags du logement spécifique */}
          {logement.tags &&
            logement.tags.map((tag) => <TagName key={tag} tag={tag} />)}
        </div>
        <div className="logRate">
          <Rating />
          <ProfilIcon
            hostName={logement.host.name}
            hostPicture={logement.host.picture}
          />
        </div>
        <div className="logDrop">
          <Dropdown title="Description" content={logement.description} />
          <Dropdown title="Équipements" content={logement.equipments} />
        </div>
      </div>
    </>
  );
}
