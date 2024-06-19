import { NavLink } from "react-router-dom";
import "../../components/styles_components/connexion-parent.css";
import { useState, useEffect } from "react";

function ConnexionParent() {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // !explication du regex pour la vérification email
  //   ^ : Début de la chaîne.
  // [a-zA-Z0-9._%+-]+ : Un ou plusieurs caractères autorisés dans la partie locale (avant le @). Les caractères autorisés incluent les lettres majuscules et minuscules, les chiffres, ainsi que ._%+-.
  // @ : Le symbole @ séparant la partie locale et le domaine.
  // [a-zA-Z0-9.-]+ : Un ou plusieurs caractères autorisés dans le nom de domaine. Les caractères autorisés incluent les lettres majuscules et minuscules, les chiffres, ainsi que .-.
  // \. : Un point littéral . séparant le domaine et l'extension de domaine.
  // [a-zA-Z]{2,} : Deux caractères ou plus pour l'extension de domaine (TLD). Les caractères autorisés incluent les lettres majuscules et minuscules.
  // $ : Fin de la chaîne.

  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // !explication du regex pour la validation mot de passe
  //   ^ : Début de la chaîne.
  // (?=.*[a-z]) : Doit contenir au moins une lettre minuscule.
  // (?=.*[A-Z]) : Doit contenir au moins une lettre majuscule.
  // (?=.*\d) : Doit contenir au moins un chiffre.
  // (?=.*[@$!%*?&]) : Doit contenir au moins un caractère spécial parmi @$!%*?&.
  // [A-Za-z\d@$!%*?&]{8,} : La chaîne doit être constituée de lettres majuscules, lettres minuscules, chiffres et caractères spéciaux mentionnés, et doit avoir au moins 8 caractères.$ : Fin de la chaîne.

  // declaration des variables d etat pour la validation du formulaire de connection et deblocage du bouton connexion
  const [checkBtnConnexion, setCheckBtnConnexion] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [passwordChecked, setPasswordChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.warn("%c⧭", "color: #d90000", email);
  console.warn("%c⧭", "color: #917399", password);

  // recuperation de champ email et verification qu il n a pas d erreure en le comparent au REGEX
  const emailCheck = (e) => {
    setEmail(() => e.target.value);
    setEmailChecked(regexEmail.test(e.target.value));
  };

  // recuperation de champ password et verification qu il n a pas d erreure en le comparent au REGEX
  const passwordCheck = (e) => {
    setPassword(() => e.target.value);
    setPasswordChecked(regexPassword.test(e.target.value));
  };

  // deblocage du bouton connexion
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
            // deblocage du bouton en retirent la className --link-connexion-parent-btn-desable--
            className={`link-connexion-parent-btn btn-connexion-parent texts ${checkBtnConnexion ? "" : "link-connexion-parent-btn-disable"}`}
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
