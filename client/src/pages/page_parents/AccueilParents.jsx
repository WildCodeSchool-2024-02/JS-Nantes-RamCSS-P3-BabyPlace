import NavigationLogin from "../../components/AccueilParents/NavigationLogin";
import "../styles_parents/AccueilParents.css";
import "../../assets/css/fonts.css";

function AccueilParents() {
  return (
    <div className="container-login">
      <div className="img-login">
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
      </div>
      <div className="text-login">
        <h3 className="titles">Garde d'enfant à la demande</h3>
        <p className="texts">
          Trouvez un.e professionnel.le de la garde d'enfant
        </p>
      </div>
      <NavigationLogin />
    </div>
  );
}

export default AccueilParents;
