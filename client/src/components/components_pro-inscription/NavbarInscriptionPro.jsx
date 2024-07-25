import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import { useNurseryLogged } from "../../contexts/NurseryDataContext";

import "../styles_components/NavbarInscriptionPro.css";
import "../../assets/css/fonts.css";

function NavbarInscriptionPro({ pageTitle }) {
  const navigate = useNavigate();
  const { fetchNursery } = useNurseryLogged();

  const handleNavigate = async () => {
    try {
      await fetchNursery();
      navigate("/pro/dashboard");
    } catch (error) {
      console.error("Failed to refresh nurseryData before navigation", error);
    }
  };

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
        <button
          type="submit"
          onClick={handleNavigate}
          className="nav-bar-pro-text texts"
        >
          Enregistrer et quitter
        </button>
      </div>
    </div>
  );
}

NavbarInscriptionPro.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default NavbarInscriptionPro;
