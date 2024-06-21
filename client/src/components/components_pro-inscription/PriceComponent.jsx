import { NavLink } from "react-router-dom";

import "../styles_components/PriceComponent.css";

function PriceComponent() {
  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 0 ----- */}
      <progress
        className="advanced-line-0"
        name="Barre de progression"
        max="100"
        value="63"
      />

      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro">
          <h3 className="adaptatif-titles">Le tarif horaire</h3>
          <p className="texts">
            Vous pourrez changer ce tarif à tout moment dans votre compte.
          </p>
          <section className="input-container-pro">
            <label htmlFor="price" className="texts text-input-label-pro">
              Tarif horaire :
            </label>
            <input
              id="price"
              step="0.01"
              type="number"
              min="0"
              placeholder="Ex : 3,5 €"
              className="texts input-number-pro"
            />
          </section>
          <section className="input-container-pro">
            <label
              htmlFor="complementary-price"
              className="texts text-input-label-pro"
            >
              Heures complémentaire majorée :
            </label>
            <input
              id="complementary-price"
              step="0.01"
              type="number"
              min="0"
              placeholder="Ex : 4,5 €"
              className="texts input-number-pro"
            />
          </section>
          <h3 className="adaptatif-titles">Les services d'accueil</h3>
          <p className="texts">
            Déterminez les services que vous proposez soit de manière
            obligatoire (les parents sont obligés de souscrire à ce service),
            soit de manière optionnelle (les parents peuvent choisir d'y
            souscrire ou pas).
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
        <section className="right-part-container-register-pro">
          <section className="descritif-background">
            <img
              src="../src/assets/images/illustration/ampoule.png"
              alt="Visuel d'une ampoule"
              className="image-descriptif-structure"
            />
            <h2 className="titles title-descriptif-structure">
              Commencez avec un prix plus bas pour attirer les réservations.
            </h2>
            <p className="text-descriptif-structure texts">
              Les nouveaux professionnels inscrits sur Babyplace commencent avec
              un prix bas pour attirer leurs premières réservations.
            </p>
            <p className="text-descriptif-structure texts">
              Ils ont ainsi plus d'avis de la part de parents, ce qui leur
              permet de gagner en crédibiltié.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default PriceComponent;
