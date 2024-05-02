import "../styles/footer.scss";

export default function Footer() {
  return (
    <>
      <footer className="footerLogo">
        <img
          className="footerLogo"
          src="./src/assets/whitelogo.svg"
          alt="Logo Kasa"
        />
        <p className="copyright">&copy; 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}
