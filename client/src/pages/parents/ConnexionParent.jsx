import { NavLink } from "react-router-dom";
import "../../components/styles_components/connexion-parent.css";

function ConnexionParent() {
  return (
    <div className="mobile-connexion">
      <div className="logo-h1-connexion">
        <img
          src="./src/assets/images/logos/logo_complet.png"
          className="img-connexion-parent"
          alt="logo"
        />
        <h1 className="titles h1-connexion ">Garde d'enfant à la demande</h1>
      </div>

      <div className="logo-form">
        <div className="img-h2-desktop">
          <h2 className="titles h2-connexion">
            Trouvez un.e professionel.le de la garde d’enfant
          </h2>
          <img
            className="img-desk"
            src="./src/assets/images/illustration/img_structure_desktop_ecran_connexion.png"
            alt=""
          />
        </div>

        <div className="container-label-input-connexion">
          <h2 className="titles">Je me connecte</h2>
          <label htmlFor="name" className="label-connexion">
            Email
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="input-connexion"
            placeholder="Email"
          />

          <label htmlFor="password" className="label-connexion">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="input-connexion"
            placeholder="Mot de passe"
          />

          <a href="/" className="link-connexion-parent">
            {" "}
            Mot de passe oublié
          </a>
          <NavLink
            to="/accueil"
            className="btn-global link-connexion-parent-btn"
          >
            Se connecter
          </NavLink>
        </div>
      </div>
      <div className="link-pro-connexion texts">
        <a href="a">Accès a votre espace</a>
        <div className="btn-link-pro-connexion">pro</div>
      </div>
    </div>
  );
}

export default ConnexionParent;
