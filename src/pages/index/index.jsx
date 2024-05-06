import HomeBanner from "../../components/banners/HomeBanner";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import logements from "../../data/logements.json";
import "./index.scss";

export default function Home() {
  return (
    <>
      <div className="pagesContainer">
        <HomeBanner />
        <div className="cards-container">
          <div className="grid">
            {logements.map((logement) => (
              <Thumbnail
                key={logement.id}
                id={logement.id}
                title={logement.title}
                cover={logement.cover}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
