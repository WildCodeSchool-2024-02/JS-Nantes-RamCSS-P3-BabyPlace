import NavigationLogin from "../../components/AccueilParents/NavigationLogin";
import "../styles_parents/AccueilParents.css";

function AccueilParents() {
  return (
    <div className="container_login">
      <img
        src="./src/assets/images/illustration/Mam&baby.png"
        className="mambaby_login"
        alt="Mam&baby"
      />
      <img
        src="./src/assets/images/logos/logo_complet.png"
        className="logo_login"
        alt="Logo"
      />
      <h1>Garde d'enfant à la demande</h1>
      <p>Trouvez un.e professionnel.le de la garde d'enfant</p>
      <NavigationLogin />
    </div>
  );
}

export default AccueilParents;
