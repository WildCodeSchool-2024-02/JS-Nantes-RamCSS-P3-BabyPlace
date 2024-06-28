import PropTypes from "prop-types";

import { Button } from "@nextui-org/react";

import "../styles_components/InformationProcessReservation.css";

function InformationProcessReservation({ setComponent }) {
  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 3 ----- */}
      <progress
        className="advanced-line-1"
        name="Barre de progression"
        max="100"
        value="49"
      />

      {/* full screen */}
      <section className="informations-process-global">
        <h2 className="titles">
          Voici comment les parents pourront réserver chez vous :
        </h2>
        <section className="articles-informations-process">
          <article className="articles-process-detail">
            <img
              className="articles-pictures-process"
              src="../../src/assets/images/illustration/article1.png"
              alt="Visuel d'une recherche d'annonce"
            />
            <h3 className="adaptatif-titles">
              1. Les parents trouvent votre annonce
            </h3>
            <p className="texts">
              Toute personne qui souhaite réserver avec vous doit confirmer ses
              coordonnées, mettre à jour son dossier d'inscription, et vous
              envoyer un message pour vous préciser les modalités d'accueil de
              leur enfant.
            </p>
          </article>
          <article className="articles-process-detail">
            <img
              className="articles-pictures-process"
              src="../../src/assets/images/illustration/article2.png"
              alt="Visuel d'une demande de réservation"
            />
            <h3 className="adaptatif-titles">
              2. Ils vous envoient une demande de réservation
            </h3>
            <p className="texts">
              les parents vous envoient une demande de réservation, et vous
              disposez de toutes les informations pour accepter la demande.
            </p>
          </article>
          <article className="articles-process-detail">
            <img
              className="articles-pictures-process"
              src="../../src/assets/images/illustration/article3.png"
              alt="Visuel d'une validation de réservation"
            />
            <h3 className="adaptatif-titles">3. Vous validez la réservation</h3>
            <p className="texts">
              Lorsque vous acceptez la réservation, les parents visualisent
              l'état de cette dernière dans la partie "Réservations" de notre
              application.
            </p>
          </article>
          <article className="articles-process-detail">
            <img
              className="articles-pictures-process"
              src="../../src/assets/images/illustration/article4.png"
              alt="Visuel d'une signature de contrat"
            />
            <h3 className="adaptatif-titles">
              4. Vous recevez un contrat accepté par les deux parties
            </h3>
            <p className="texts">
              Lorsque la réservation est acceptée par les deux parties, un
              contrat engageant les parents et vous est envoyée à chaque partie.
            </p>
          </article>
        </section>
      </section>

      {/* Redirection to next screen of professional registration */}
      <nav className="adaptatif-nav-buttons-process">
        <section className="display-buttons">
          <Button
            onClick={() => setComponent("InternalRulesComponent")}
            variant="shadow"
            className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
            size="lg"
          >
            Retour
          </Button>
          {/* Redirection to next screen of professional registration */}
          <Button
            onClick={() => setComponent("AvaibleSeatsComponent")}
            variant="shadow"
            className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
            size="lg"
          >
            Suivant
          </Button>
        </section>
      </nav>
    </section>
  );
}

// Validation des props
InformationProcessReservation.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default InformationProcessReservation;
