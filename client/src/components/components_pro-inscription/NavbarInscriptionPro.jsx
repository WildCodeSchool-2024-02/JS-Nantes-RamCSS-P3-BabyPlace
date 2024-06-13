import { NavLink } from "react-router-dom";

import "../styles_components/NavbarInscriptionPro.css";
import "../../assets/css/fonts.css";

function NavbarInscriptionPro() {
  return (
    <div className="nav-bar-pro">
      <div className="nav-bar-pro-left-part">
        <div className="nav-bar-pro-logo">
          <img
            src="../src/assets/images/logos/logo_coeur.png"
            alt="logo"
            className="image"
          />
          <h2 className="nav-bar-pro-text titles">Babyplace</h2>
        </div>
        <p className="nav-bar-pro-text texts">Structure d'accueil</p>
      </div>
      <div className="nav-bar-pro-right-part">
        <NavLink to="/" className="nav-bar-pro-text texts">
          Enregistrer et quitter
        </NavLink>
      </div>
    </div>
  );
}

export default NavbarInscriptionPro;
