import Banner from "../../../components/banners/Banner";
import Dropdown from "../../../components/dropdown/Dropdown";
import "./about.scss";

export default function About() {
  return (
    <>
      <div className="pagesContainer">
        <Banner />
        <div className="container">
          <Dropdown
            title="Fiabilité"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur minima autem distinctio iusto adipisci quibusdam neque nam."
          />
          <Dropdown
            title="Respect"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur minima autem distinctio iusto adipisci quibusdam neque nam."
          />
          <Dropdown
            title="Services"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur minima autem distinctio iusto adipisci quibusdam neque nam."
          />
          <Dropdown
            title="Sécurité"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur minima autem distinctio iusto adipisci quibusdam neque nam."
          />
        </div>
      </div>
    </>
  );
}
