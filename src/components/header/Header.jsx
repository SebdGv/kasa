import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to={"/"}>
            <img
              className="headerLogo"
              src="./src/assets/redLogo.svg"
              alt="Logo Kasa"
            />
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to={"/"}>
                <p> Accueil</p>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <p>À Propos</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
