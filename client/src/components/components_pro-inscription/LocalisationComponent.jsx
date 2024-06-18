import { NavLink } from "react-router-dom";

import "../styles_components/LocalisationComponent.css";

function LocalisationComponent() {
  return (
    <section>
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

          {/* Redirection to screen 1 of professional registration */}
          <nav className="nav-buttons-pro-register">
            <NavLink to="/" className="navlink-prev-pro screen2 texts">
              <p>&lt; Retour</p>
            </NavLink>
            {/* Redirection to screen 3 of professional registration */}
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

export default LocalisationComponent;
