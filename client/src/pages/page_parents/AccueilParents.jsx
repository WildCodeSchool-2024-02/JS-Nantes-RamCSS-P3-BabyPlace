import NavigationLogin from "../../components/AccueilParents/NavigationLogin";
import "../styles_parents/AccueilParents.css";
import "../../assets/css/fonts.css";

function AccueilParents() {
  return (
    <div className="container-login">
      <div className="container-img-text">
        <img
          src="./src/assets/images/illustration/Mam&baby.png"
          className="mambaby-login"
          alt="Mam&baby"
        />
        <img
          src="./src/assets/images/logos/logo_complet.png"
          className="logo-login"
          alt="Logo"
        />
        <h3 className="titles parents-welcome-title">
          Garde d'enfant à la demande
        </h3>
        <p className="texts parents-welcome-text">
          Trouvez un.e professionnel.le de la garde d'enfant
        </p>
      </div>
      <NavigationLogin />
    </div>
  );
}

export default AccueilParents;
