import PropTypes from "prop-types";

import { Button } from "@nextui-org/react";

import "../styles_components/InternalRulesComponent.css";

function InternalRulesComponent({ setComponent }) {
  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 3 ----- */}
      <progress
        className="advanced-line-1"
        name="Barre de progression"
        max="100"
        value="42"
      />

      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro">
          <h2 className="titles">Fixez un règlement intérieur</h2>
          <p className="texts">
            Les parents doivent accepter votre règlement intérieur avant de
            réserver.
          </p>
          <section className="global-container-input-rules">
            <section className="input-radio-container">
              <p className="texts">
                La période d'adaptation est <strong>obligatoire</strong> :
              </p>
              <section className="radiogroup" aria-label="yes or no">
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="yes-adaptation-period"
                  name="adaptation-period"
                  value="✓"
                />
                <label htmlFor="yes-adaptation-period">✓</label>
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="no-adaptation-period"
                  name="adaptation-period"
                  value="✗"
                />
                <label htmlFor="no-adaptation-period">✗</label>
              </section>
            </section>
            <section className="input-radio-container">
              <p className="texts">
                Les parents sont priés de respecter l'environnement, le
                voisinage, la vie privée et la famille du personnel de la crèche
                :
              </p>
              <section className="radiogroup" aria-label="yes or no">
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="yes-respect"
                  name="respect"
                  value="✓"
                />
                <label htmlFor="yes-respect">✓</label>
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="no-respect"
                  name="respect"
                  value="✗"
                />
                <label htmlFor="no-respect">✗</label>
              </section>
            </section>
            <section className="input-radio-container">
              <p className="texts">
                Taper ou sonner à la porte, ne pas rentrer sans y être invité et
                attendre qu'on vienne vous ouvrir :
              </p>
              <section className="radiogroup" aria-label="yes or no">
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="yes-doorbell"
                  name="doorbell"
                  value="✓"
                />
                <label htmlFor="yes-doorbell">✓</label>
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="no-doorbell"
                  name="doorbell"
                  value="✗"
                />
                <label htmlFor="no-doorbell">✗</label>
              </section>
            </section>
            <section className="input-radio-container">
              <p className="texts">
                Les parents doivent transmettre les informations nécessaires,
                ainsi que les incidents éventuels survenus au domicile :
              </p>
              <section className="radiogroup" aria-label="yes or no">
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="yes-incidents"
                  name="incidents"
                  value="✓"
                />
                <label htmlFor="yes-incidents">✓</label>
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="no-incidents"
                  name="incidents"
                  value="✗"
                />
                <label htmlFor="no-incidents">✗</label>
              </section>
            </section>
            <section className="input-radio-container">
              <p className="texts">
                L'enfant arrivera en état de propreté, habillé et ayant pris son
                premier repas :
              </p>
              <section className="radiogroup" aria-label="yes or no">
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="yes-cleanliness"
                  name="cleanliness"
                  value="✓"
                />
                <label htmlFor="yes-cleanliness">✓</label>
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="no-cleanliness"
                  name="cleanliness"
                  value="✗"
                />
                <label htmlFor="no-cleanliness">✗</label>
              </section>
            </section>
            <section className="input-radio-container">
              <p className="texts rules-text">
                Les bijoux seront enlevés et rendus aux parents pour des raisons
                de sécurité (étouffement, ingestion, ...) :
              </p>
              <section className="radiogroup" aria-label="yes or no">
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="yes-jewelry"
                  name="jewelry"
                  value="✓"
                />
                <label htmlFor="yes-jewelry">✓</label>
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="no-jewelry"
                  name="jewelry"
                  value="✗"
                />
                <label htmlFor="no-jewelry">✗</label>
              </section>
            </section>
            <section className="input-radio-container">
              <p className="texts">
                Le personnel de la crèche est habilité à administrer les
                médicaments uniquement sur ordonnance ou protocole :
              </p>
              <section className="radiogroup" aria-label="yes or no">
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="yes-drugs"
                  name="drugs"
                  value="✓"
                />
                <label htmlFor="yes-drugs">✓</label>
                <input
                  className="input-radio-internal-rules"
                  type="radio"
                  id="no-drugs"
                  name="drugs"
                  value="✗"
                />
                <label htmlFor="no-drugs">✗</label>
              </section>
            </section>
          </section>
          <h3 className="adaptatif-titles">Règles supplémentaires</h3>
          <section className="input-radio-container">
            <p className="texts">
              Le personnel de la crèche est habilité à administrer les
              médicaments uniquement sur ordonnance ou protocole :
            </p>
            <section className="radiogroup" aria-label="yes or no">
              <input
                className="input-radio-internal-rules"
                type="radio"
                id="yes-extra"
                name="extra"
                value="✓"
              />
              <label htmlFor="yes-extra">✓</label>
              <input
                className="input-radio-internal-rules"
                type="radio"
                id="no-extra"
                name="extra"
                value="✗"
              />
              <label htmlFor="no-extra">✗</label>
            </section>
          </section>

          {/* Redirection to next screen of professional registration */}
          <nav className="nav-buttons-pro-register screen11">
            <Button
              onClick={() => setComponent("UseConditionComponent")}
              variant="shadow"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
              size="lg"
            >
              Retour
            </Button>
            {/* Redirection to next screen of professional registration */}
            <Button
              onClick={() => setComponent("InformationProcessReservation")}
              variant="shadow"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
              size="lg"
            >
              Suivant
            </Button>
          </nav>
        </section>

        {/* ----- Right part of the screen ------ */}
        <section className="right-part-container-register-pro">
          <section className="descritif-background">
            <h2 className="titles title-descriptif-structure">
              Plus de souplesse = plus de réservations.
            </h2>
            <p className="text-descriptif-structure texts">
              28% des familles en plus cherchent une solution de garde d'urgence
              ou temporaire. Si vous le souhaitez, vous pouvez accueillir ces
              enfants pour des périodes courtes (quelques heures), ne
              nécessitant pas de période d'adaptation.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

// Validation des props
InternalRulesComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default InternalRulesComponent;
