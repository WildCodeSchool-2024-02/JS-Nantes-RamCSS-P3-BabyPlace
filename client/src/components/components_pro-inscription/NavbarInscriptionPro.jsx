import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import "../styles_components/NavbarInscriptionPro.css";
import "../../assets/css/fonts.css";

function NavbarInscriptionPro({ pageTitle }) {
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
        <p className="nav-bar-pro-text texts">{pageTitle}</p>
      </div>
      <div className="nav-bar-pro-right-part">
        <NavLink to="/" className="nav-bar-pro-text texts">
          Enregistrer et quitter
        </NavLink>
      </div>
    </div>
  );
}

NavbarInscriptionPro.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default NavbarInscriptionPro;
