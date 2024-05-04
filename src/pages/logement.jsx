import Carousel from "../components/carousel/Carousel";
import Dropdown from "../components/dropdown/Dropdown";
import ProfilIcon from "../components/profilIcon/ProfilIcon";
import Rating from "../components/rating/rating";
import TagName from "../components/tagname/TagName";

export default function Logement() {
  return (
    <>
      <div className="pagesContainer">
        <Carousel />

        <div className="logTitle">
          <h1 className="title">
            Paris center, on the romantic Canal Saint-Martin
          </h1>
          <div className="logLocation">Paris, île-de-France</div>
        </div>
        <TagName />
        <TagName />
        <TagName />
        <div className="logRate">
          <Rating />
          <ProfilIcon />
        </div>
        <Dropdown />
        <Dropdown />
      </div>
    </>
  );
}
