/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import "../../components/styles_components/connexion-parent.css";
import { useState, useEffect } from "react";

function ConnexionParent() {
  const [checkBtnConnexion, setCheckBtnConnexion] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [passwordChecked, setPasswordChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log('%c⧭', 'color: #aa00ff', email);
  // console.log('%c⧭', 'color: #e50000', password);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // console.log('%c⧭', 'color: #00e600', "email",emailChecked);
  // console.log('%c⧭', 'color: #00a3cc', "password",passwordChecked);
  // console.log('%c⧭', 'color: #ff0000', "email + password",checkBtnConnexion);

  const emailCheck = (e) => {
    setEmail(e.target.value);
  };

  const passwordCheck = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (emailChecked && passwordChecked) {
      setCheckBtnConnexion(true);
    } else {
      setCheckBtnConnexion(false);
    }
  }, [emailChecked, passwordChecked]);

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
            Trouvez un⸱e professionel⸱le de la garde d’enfant
          </h2>
          <img
            className="img-desk"
            src="./src/assets/images/illustration/img_structure_desktop_ecran_connexion.png"
            alt="baby place"
          />
        </div>

        <form className="container-label-input-connexion">
          <h2 className="titles h2-connexion-parent">Je me connecte</h2>
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
            onChange={emailCheck}
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
            onChange={passwordCheck}
          />

          <a href="/" className="link-connexion-parent texts">
            {" "}
            Mot de passe oublié
          </a>
          <NavLink
            to="/accueil"
            //! className={`link-connexion-parent-btn btn-global texts ${checkBtnConnexion ? "" : "link-connexion-parent-btn-desable"}`}
          >
            Se connecter
          </NavLink>
        </form>
      </div>
      <NavLink
        to="/connexionpro"
        className="btn-link-connexion link-pro-connexion texts"
      >
        Accès a votre espace
        <span className="btn-link-pro-connexion">pro</span>
      </NavLink>
    </div>
  );
}

export default ConnexionParent;
