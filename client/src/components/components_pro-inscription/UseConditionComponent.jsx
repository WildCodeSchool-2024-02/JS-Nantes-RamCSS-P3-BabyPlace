import { NavLink } from "react-router-dom";

import "../styles_components/UseConditionComponent.css";

function UseConditionComponent() {
  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 3 ----- */}
      <progress
        className="advanced-line-1"
        name="Barre de progression"
        max="100"
        value="35"
      />

      {/* full screen */}
      <section className="global-container-register-pro">
        <section className="left-part-container-register-pro">
          <h2 className="titles">
            Passez en revue les conditions relatives aux parents de Babyplace.
          </h2>
          <p className="texts">
            Babyplace a des conditions que tous les aprents doivent remplir
            avant de réserver.
          </p>
          <p className="texts">
            Tous les parents Babyplace sont tenus de fournir : <br />
            - Une adresse mail.
            <br />- Un numéro de téléphone confirmé.
          </p>
          <p className="texts">
            Avant de réserver, tous les parents doivent : <br />
            - Remplir leur dossier d'inscription.
            <br />
            - Accepter votre règlement d'intérieur. <br />- Vous envoyer un
            message concernant leur demandes de réservation
          </p>

          {/* Redirection to prev screen of professional registration */}
          <nav className="nav-buttons-pro-register adaptatif-nav-buttons-use-conditions">
            <NavLink to="/" className="navlink-prev-pro screen2 texts">
              <p>&lt; Retour</p>
            </NavLink>
            {/* Redirection to next screen of professional registration */}
            <NavLink to="/" className="navlink-next-pro screen2 texts">
              <p>Suivant</p>
              <img
                src="../src/assets/images/illustration/arrow_right.svg"
                alt="Arrow"
              />
            </NavLink>
          </nav>
        </section>

        {/* ----- Right part of the screen ------ */}
        <section className="right-part-container-register-pro" />
      </section>
    </section>
  );
}

export default UseConditionComponent;
