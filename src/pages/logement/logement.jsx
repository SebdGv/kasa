import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import Dropdown from "../../components/dropdown/Dropdown";
import ProfilIcon from "../../components/profilIcon/ProfilIcon";
import Rating from "../../components/rating/rating";
import TagName from "../../components/tagname/TagName";
import logements from "../../data/logements.json";
import NotFound from "../error/error";
import "./logement.scss";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  if (!logement) {
    return <NotFound />;
  }

  return (
    <>
      <div className="pagesContainer">
        <Carousel images={logement.pictures} />
        <div className="logementContent">
          <div className="logementTitle">
            <h1>{logement.title}</h1>
            <div className="logementLocation">
              {logement.location.split("-").reverse().join(", ")}
            </div>
            <div className="logementTags">
              {/* Afficher les tags du logement spécifique */}
              {logement.tags &&
                logement.tags.map((tag) => <TagName key={tag} tag={tag} />)}
            </div>
          </div>
          <div className="logementRate">
            <Rating rating={logement.rating} />
            <ProfilIcon
              hostName={logement.host.name}
              hostPicture={logement.host.picture}
            />
          </div>
        </div>
        <div className="logementDropdown">
          <Dropdown title="Description" content={logement.description} />
          <Dropdown title="Équipements" content={logement.equipments} />
        </div>
      </div>
    </>
  );
}
