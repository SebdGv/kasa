import Banner from "../components/banners/Banner";
import Dropdown from "../components/dropdown/Dropdown";

export default function About() {
  return (
    <>
      <div className="pagesContainer">
        <Banner />

        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
    </>
  );
}
