import "../../pages/styles_pro-inscription/NavbarInscriptionPro.css";
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
          <h2 className="nav-bar-pro-text nav-bar-pro-title">Babyplace</h2>
        </div>
        <p className="nav-bar-pro-text nav-bar-pro-buttons">
          Structure d'accueil
        </p>
      </div>
      <div className="nav-bar-pro-right-part">
        <a href="/" className="nav-bar-pro-text nav-bar-pro-buttons">
          Enregistrer et quitter
        </a>
      </div>
    </div>
  );
}

export default NavbarInscriptionPro;
