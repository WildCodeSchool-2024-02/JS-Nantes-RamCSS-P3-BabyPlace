import { NavLink } from "react-router-dom";
import "../styles_parents/AccueilParents.css";
import "../../assets/css/fonts.css";

function AccueilParents() {
  return (
    <div className="container-login">
      <div className="img-login">
        <img
          src="./src/assets/images/illustration/Mum&baby.png"
          className="mumbaby-login"
          alt="avatar d'une maman et de son bébé"
        />
        <img
          src="./src/assets/images/logos/logo_complet.png"
          className="logo-login"
          alt="logo babyplace"
        />
      </div>
      <div className="text-login">
        <h3 className="titles">Garde d'enfant à la demande</h3>
        <p className="texts">
          Trouvez un.e professionnel.le de la garde d'enfant
        </p>
      </div>
      <div className="nav-bottom texts">
        <NavLink className="btn-nav-bottom" to="/acces-invite">
          {" "}
          Passer{" "}
        </NavLink>
        <NavLink className="btn-nav-bottom" to="/connexion">
          {" "}
          Se connecter{" "}
        </NavLink>
        <NavLink className="button-navigate" to="/connexion">
          {" "}
          S'inscrire{" "}
        </NavLink>
      </div>
    </div>
  );
}

export default AccueilParents;
