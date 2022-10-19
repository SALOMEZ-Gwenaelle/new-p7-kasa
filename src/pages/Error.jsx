import { Link } from "react-router-dom";


function Error() {
    return (
      <div className="error404">
        <h1 className="errorTitle">404</h1>
        <p className="errorTxt">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="backLink">Retourner sur la page d'accueil.</Link>
      </div>
    );
  }

export default Error;
