import HomeBanner from "../../../components/banners/HomeBanner";
import Dropdown from "../../../components/dropdown/Dropdown";
import "./about.scss";

export default function About() {
  return (
    <>
      <div className="pagesContainer">
        <HomeBanner />
        <div className="container">
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
      </div>
    </>
  );
}
