import { NavLink } from "react-router-dom";
import "../../components/styles_components/connexion-parent.css";

function ConnexionParent() {
  return (
    <div className="mobile-connexion">
      <img
        src="./src/assets/images/logos/logo_complet.png"
        className="img-connextion-parent"
        alt=""
      />

      <h1 className="titles h1-connexion ">Garde d'enfant à la demande</h1>

      <div className="container-label-input-connexion">
        <input
          type="text"
          id="name"
          name="name"
          required
          className="input-connexion"
          placeholder="Email"
        />

        <input
          type="password"
          id="password"
          name="name"
          required
          className="input-connexion"
          placeholder="Mot de passe"
        />

        <a href="/" className="link-connexion-parent">
          {" "}
          Mot de passe oublié
        </a>
      </div>
      <NavLink to="/accueil" className="btn-global">
        Se connecter
      </NavLink>
    </div>
  );
}

export default ConnexionParent;
