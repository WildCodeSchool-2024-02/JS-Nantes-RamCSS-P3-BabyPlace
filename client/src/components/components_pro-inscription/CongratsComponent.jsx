import { Button } from "@nextui-org/button";

import PropTypes from "prop-types";

import "../styles_components/CongratsComponent.css";

function CongratsComponent({ setComponent }) {
  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 0 ----- */}
      <progress
        className="advanced-line-0"
        name="Barre de progression"
        max="100"
        value="77"
      />
      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro left-part-adaptatif-congrats">
          <section className="congrats-text-container">
            <h2 className="titles">Hourra !</h2>
            <p className="texts">
              Nous avons bien pris en compte tous les éléments pour paramétrer
              votre profil Babyplace.
              <br />
              Il ne vous reste plus qu'une dernière étape de sécurité à
              franchir.
            </p>
            <p>
              Votre compte sera vérifié par notre équipe dans un délai de 48h.
            </p>
          </section>
          <section className="congrats-text-container">
            <h2 className="titles">Sécurité</h2>
            <p className="texts">
              Nous avons besoin d'effectuer une dernière vérification avant
              validation définitive de votre compte sous 48h jour ouvrés :
            </p>
          </section>

          <nav className="adaptatif-nav-buttons">
            <section className="display-buttons">
              {/* Redirection to prev screen of professional registration */}
              <Button
                onClick={() => setComponent("SummaryComponent")}
                variant="shadow"
                className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                size="lg"
              >
                Retour
              </Button>
              {/* Redirection to next screen of professional registration */}
              <Button
                onClick={() => setComponent("SecurityComponent")}
                variant="shadow"
                className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                size="lg"
              >
                Suivant
              </Button>
            </section>
          </nav>
        </section>
        {/* ----- Right part of the screen ------ */}
        <section className="right-part-container-register-pro">
          <section className="descritif-background">
            <img
              src="../src/assets/images/illustration/congrats.png"
              alt="Avatar"
            />
          </section>
        </section>
      </section>
    </section>
  );
}

// Props Validation
CongratsComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default CongratsComponent;
