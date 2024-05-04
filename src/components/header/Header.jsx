import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            className="headerLogo"
            src="./src/assets/redLogo.svg"
            alt="Logo Kasa"
          />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>
            <li>
              <Link to={"/about"}>À Propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
