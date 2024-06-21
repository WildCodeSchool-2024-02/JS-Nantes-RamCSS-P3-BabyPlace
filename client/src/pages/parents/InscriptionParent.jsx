import { NavLink } from "react-router-dom";
import "../styles_parents/InscriptionParent.css";
import { useState, useEffect } from "react";

function InscriptionParent() {
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

  // declaration des variables d etat pour la validation du formulaire de inscription et deblocage du bouton connexion
  const [checkBtnInscription, setCheckBtnInscription] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [passwordChecked, setPasswordChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameChecked, setFirstNameChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  console.warn("%c⧭", "color: #733d00", confirmPassword);
  console.warn("%c⧭", "color: #d90000", email);
  console.warn("%c⧭", "color: #917399", password);
  console.warn("%c⧭", "color: #e50000", firstName);

  // recuperation de champ email et verification qu il n a pas d erreure en le comparent au REGEX
  const emailCheck = (e) => {
    setEmail(() => e.target.value);
    setEmailChecked(regexEmail.test(e.target.value));
  };

  // récupération du champ prénom et vérification qu'il n'est pas vide
  const firstNameCheck = (e) => {
    setFirstName(e.target.value);
    setFirstNameChecked(e.target.value.trim() !== "");
  };

  // recuperation de champ password et verification qu il n a pas d erreure en le comparent au REGEX
  const passwordCheck = (e) => {
    setPassword(() => e.target.value);
    setPasswordChecked(regexPassword.test(e.target.value));
  };

  const confirmPasswordCheck = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordValid(e.target.value === password);
  };

  // gestion de la case à cocher
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // deblocage du bouton d'incription
  useEffect(() => {
    if (
      emailChecked &&
      passwordChecked &&
      firstNameChecked &&
      isChecked &&
      confirmPasswordValid
    ) {
      setCheckBtnInscription(true);
    } else {
      setCheckBtnInscription(false);
    }
  }, [
    emailChecked,
    passwordChecked,
    firstNameChecked,
    isChecked,
    confirmPasswordValid,
  ]);

  return (
    <div className="mobile-inscription">
      <div className="logo-h1-inscription">
        <img
          src="../../../../../src/assets/images/logos/logo_complet.png"
          className="img-inscription-parent"
          alt="logo"
        />
        <h1 className="titles h1-inscription">Garde d'enfant à la demande</h1>
      </div>

      <div className="logo-form">
        <div className="img-h2-desktop">
          <h2 className="titles h2-inscription">
            Trouvez un⸱e professionel⸱le de la garde d’enfant
          </h2>
          <img
            className="img-desk"
            src="../../../../../src/assets/images/illustration/img_structure_desktop_ecran_connexion.png"
            alt="baby place"
          />
        </div>

        <form className="container-label-input-inscription">
          <h2 className="titles h2-inscription-parent">Je m'inscris</h2>
          <label htmlFor="name" className="label-inscription">
            Email
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="input-inscription"
            placeholder="Email"
            onChange={emailCheck}
          />

          <label htmlFor="firstname" className="label-inscription">
            Prénom
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            className="input-inscription"
            placeholder="Prénom"
            onChange={firstNameCheck}
          />

          <label htmlFor="password" className="label-inscription">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="input-inscription"
            placeholder="Mot de passe"
            onChange={passwordCheck}
          />

          <label htmlFor="confirmPassword" className="label-inscription">
            Confirmation de mot de passe
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            className="input-inscription"
            placeholder="Confirmation de mot de passe"
            onChange={confirmPasswordCheck}
          />

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox">
              J'accepte les conditions d'utilisation
            </label>
          </div>

          <NavLink
            to="/accueil"
            // deblocage du bouton en retirent la className --link-connexion-parent-btn-desable--
            className={`link-inscription-parent-btn btn-inscription-parent texts ${checkBtnInscription ? "" : "link-inscription-parent-btn-disable"}`}
          >
            S'inscrire
          </NavLink>
        </form>
      </div>
      <div className="nav-bottom">
        <NavLink to="/" className="btn-nav-bottom texts">
          accueil
        </NavLink>
        <NavLink to="/connexion" className="btn-nav-bottom texts">
          se connecter
        </NavLink>
      </div>
    </div>
  );
}

export default InscriptionParent;
