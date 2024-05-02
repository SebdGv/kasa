import "../styles/header.scss";

export default function Header() {
  return (
    <>
      <header>
        <img
          className="headerLogo"
          src="./src/assets/redLogo.svg"
          alt="Logo Kasa"
        />
        <ul className="nav">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">À Propos</a>
          </li>
        </ul>
      </header>
    </>
  );
}
