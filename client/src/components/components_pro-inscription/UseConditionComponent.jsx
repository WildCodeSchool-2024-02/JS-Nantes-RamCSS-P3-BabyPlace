import PropTypes from "prop-types";

import { Button } from "@nextui-org/react";

import "../styles_components/UseConditionComponent.css";

function UseConditionComponent({ setComponent }) {
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
          <nav className="nav-buttons-pro-register screen11">
            <Button
              onClick={() => setComponent("DetailDescriptionComponent")}
              variant="shadow"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
              size="lg"
            >
              Retour
            </Button>
            {/* Redirection to next screen of professional registration */}
            <Button
              onClick={() => setComponent("InternalRulesComponent")}
              variant="shadow"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
              size="lg"
            >
              Suivant
            </Button>
          </nav>
        </section>

        {/* ----- Right part of the screen ------ */}
        <section className="right-part-container-register-pro" />
      </section>
    </section>
  );
}

// Validation des props
UseConditionComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default UseConditionComponent;
