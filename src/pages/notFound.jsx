import "../styles/notFound.scss";

export default function NotFound() {
  return (
    <>
      <div className="notFound">
        <p className="err404">404</p>
        <p className="errText">Oups! La page que vous demandez n'existe pas.</p>
        <a href="#" className="backHome">
          Retourner sur la page d’accueil
        </a>
      </div>
    </>
  );
}
