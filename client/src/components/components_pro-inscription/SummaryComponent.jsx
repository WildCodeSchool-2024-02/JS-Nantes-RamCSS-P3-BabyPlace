import { Button } from "@nextui-org/button";

import PropTypes from "prop-types";

import "../styles_components/SummaryComponent.css";

function SummaryComponent({ setComponent }) {
  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 0 ----- */}
      <progress
        className="advanced-line-0"
        name="Barre de progression"
        max="100"
        value="70"
      />
      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro">
          <h2 className="titles">
            Sur la base de vos paramètres, voici à quoi vous pouvez vous
            attendre :
          </h2>
          <section className="summary-articles-container">
            <article className="summary-text-container">
              <img
                className="summary-image"
                src="../src/assets/images/illustration/recherche-annonce.png"
                alt="visuel d'une personne faisant bonjour de la main"
              />
              <h3 className="titles adaptatif-titles">
                Vous êtes disponible à partir du 24 août pour accueillir jusqu'à
                4 enfants simultanément.
              </h3>
              <p className="texts">
                La famille Martin trouve votre annonce sur Babyplace, et vous
                trouve parfait⸱e pour accueillir leur bout de chou.
              </p>
            </article>
            <article className="summary-text-container">
              <img
                className="summary-image"
                src="../src/assets/images/illustration/demande-approuve.png"
                alt="visuel d'une horloge signifiant l'attente"
              />
              <h3 className="titles adaptatif-titles">
                La famille envoie un message, avec leur demande de réservation.
              </h3>
              <p className="texts">
                La famille Martin vous indique avoir récemment déménagé et avoir
                besoin en urgence d’une solution de garde pour leur petite fille
                de 2 ans, Lou . Ils ont remplis le dossier d’inscription avec
                toutes les attestations à jour (carnet de vaccination, signature
                du règlement intérieur, ...).
              </p>
            </article>
            <article className="summary-text-container">
              <img
                className="summary-image"
                src="../src/assets/images/illustration/demande-approuve.png"
                alt="visuel d'une horloge signifiant l'attente"
              />
              <h3 className="titles adaptatif-titles">
                Vous devez approuver la demande.
              </h3>
              <p className="texts">
                La famille Martin attend de vos nouvelles pour organiser la
                garde de leur enfant.
              </p>
            </article>
            <article className="summary-text-container">
              <h3 className="titles adaptatif-titles">
                Accueillez la petite Lou en toute serenité.
              </h3>
              <p className="texts">
                Le contrat de travail est automatiquement envoyé, vous n'avez
                plus qu'à signer. <br />
                La fiche de présence est également automatiquement établie à la
                fin de la mission.
              </p>
            </article>
          </section>

          <nav className="adaptatif-nav-buttons">
            <section className="display-buttons">
              {/* Redirection to prev screen of professional registration */}
              <Button
                onClick={() => setComponent("PriceComponent")}
                variant="shadow"
                className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                size="lg"
              >
                Retour
              </Button>
              {/* Redirection to next screen of professional registration */}
              <Button
                onClick={() => setComponent("CongratsComponent")}
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
SummaryComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default SummaryComponent;
