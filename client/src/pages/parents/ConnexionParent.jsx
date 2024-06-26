import React from "react";
import { NavLink } from "react-router-dom";
import "../../components/styles_components/connexion-parent.css";
import { Button, Input } from "@nextui-org/react";
import EyeFilledIcon from "../../assets/nextUI/EyeFilledIcon";
import EyeSlashFilledIcon from "../../assets/nextUI/EyeSlashFilledIcon";

function ConnexionParent() {
  // declaration des variables d etat pour la validation du formulaire de connection et deblocage du bouton connexion
  // const [checkBtnConnexion, setCheckBtnConnexion] = useState(false);
  // const [emailChecked, setEmailChecked] = useState(false);
  // const [passwordChecked, setPasswordChecked] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // console.warn("%c⧭", "color: #d90000", email);
  // console.warn("%c⧭", "color: #917399", password);

  // deblocage du bouton connexion
  // useEffect(() => {
  //   if (emailChecked && passwordChecked) {
  //     setCheckBtnConnexion(true);
  //   } else {
  //     setCheckBtnConnexion(false);
  //   }
  // }, [emailChecked, passwordChecked]);

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // !explication du regex pour la vérification email
  // ?  ^ : Début de la chaîne.
  // ?[a-zA-Z0-9._%+-]+ : Un ou plusieurs caractères autorisés dans la partie locale (avant le @). Les caractères autorisés incluent les lettres majuscules et minuscules, les chiffres, ainsi que ._%+-.
  // ?@ : Le symbole @ séparant la partie locale et le domaine.
  // ?[a-zA-Z0-9.-]+ : Un ou plusieurs caractères autorisés dans le nom de domaine. Les caractères autorisés incluent les lettres majuscules et minuscules, les chiffres, ainsi que .-.
  // ?\. : Un point littéral . séparant le domaine et l'extension de domaine.
  // ?[a-zA-Z]{2,} : Deux caractères ou plus pour l'extension de domaine (TLD). Les caractères autorisés incluent les lettres majuscules et minuscules.
  // ?$ : Fin de la chaîne.

  // const regexPassword =
  // ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // !explication du regex pour la validation mot de passe
  // ? ^ : Début de la chaîne.
  // ??=.*[a-z]) : Doit contenir au moins une lettre minuscule.
  // ??=.*[A-Z]) : Doit contenir au moins une lettre majuscule.
  // ??=.*\d) : Doit contenir au moins un chiffre.
  // ??=.*[@$!%*?&]) : Doit contenir au moins un caractère spécial parmi @$!%*?&.
  // ?A-Za-z\d@$!%*?&]{8,} : La chaîne doit être constituée de lettres majuscules, lettres minuscules, chiffres et caractères spéciaux mentionnés, et doit avoir au moins 8 caractères.$ : Fin de la chaîne.

  const [value, setValue] = React.useState("");

  const validateEmail = (valueReg) => valueReg.match(regexEmail);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return !validateEmail(value);
  }, [validateEmail]);

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

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

          <Input
            value={value}
            type="email"
            label="Email"
            variant="bordered"
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "success"}
            errorMessage="Please enter a valid email"
            onValueChange={setValue}
            className="max-w-xs"
            // className="max-w-lg"
          />

          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
          />

          <a href="/" className="link-connexion-parent texts">
            {" "}
            Mot de passe oublié
          </a>

          <Button
            variant="shadow"
            className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
            size="lg"
          >
            connexion
          </Button>
        </form>
      </div>
      <NavLink
        to="/connexionpro"
        className="btn-link-connexion link-pro-connexion texts"
      >
        Accès a votre espace
        <span className="btn-link-pro-connexion">pro</span>
      </NavLink>
      <div className="nav-bottom">
        <NavLink to="/accueil" className="btn-nav-bottom texts">
          accueil
        </NavLink>
        <NavLink to="/inscription" className="btn-nav-bottom texts">
          s'inscrire
        </NavLink>
      </div>
    </div>
  );
}

export default ConnexionParent;
