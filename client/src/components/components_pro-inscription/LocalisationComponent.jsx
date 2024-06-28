import PropTypes from "prop-types";

import { Button } from "@nextui-org/react";

import "../styles_components/LocalisationComponent.css";

function LocalisationComponent({ setComponent }) {
  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 1 ----- */}
      <progress
        className="advanced-line-1"
        name="Barre de progression"
        max="100"
        value="7"
      />

      {/* full screen */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro">
          <h2 className="titles">Où se situe votre structure?</h2>
          <p className="texts">
            Les parents n'obtiendront l'adresse qu'après avoir effectué la
            réservation
          </p>
          <button type="submit" className="button-photos-pro texts">
            Utiliser l'emplacement actuel
          </button>
          <h2 className="titles">Adresse postale</h2>
          <section className="input-container-pro">
            <label htmlFor="name" className="texts text-input-label-pro">
              N° et nom de rue :
            </label>
            <input
              type="text"
              placeholder="Ex : 18 rue Boudet"
              className="texts input-text-pro"
            />
          </section>
          <section className="global-adaptatif-input-pro">
            <section>
              <h2 className="titles">Code postal</h2>
              <section className="adaptatif-input-pro">
                <label htmlFor="name" className="texts text-input-label-pro">
                  Code postal :
                </label>
                <input
                  type="text"
                  placeholder="Ex : 44000"
                  className="texts input-text-pro"
                />
              </section>
            </section>
            <section>
              <h2 className="titles">Ville</h2>
              <section className="adaptatif-input-pro">
                <label htmlFor="name" className="texts text-input-label-pro">
                  Ville :
                </label>
                <input
                  type="text"
                  placeholder="Ex : Nantes"
                  className="texts input-text-pro"
                />
              </section>
            </section>
          </section>

          {/* Redirection to prev screen of professional registration */}
          <nav className="nav-buttons-pro-register adaptatif-nav-buttons-use-conditions">
            <Button
              onClick={() => setComponent("StructureComponent")}
              variant="shadow"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
              size="lg"
            >
              Retour
            </Button>
            {/* Redirection to next screen of professional registration */}
            <Button
              onClick={() => setComponent("PicturesComponent")}
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
LocalisationComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default LocalisationComponent;
