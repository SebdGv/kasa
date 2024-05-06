import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <footer className="footerLogo">
        <Link to={"/"}>
          <img
            className="footerLogo"
            src="./src/assets/whitelogo.svg"
            alt="Logo Kasa"
          />
        </Link>
        <p className="copyright">&copy; 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}
