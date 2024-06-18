import { NavLink } from "react-router-dom";

import "../styles_components/DescriptionComponent.css";
import "../../assets/images/illustration/avatar_lorem.jpg";

function DescriptionComponent() {
  return (
    <section>
      {/* ----- Visual indicating the progress of registration => level 3 ----- */}
      <progress
        className="advanced-line-1"
        name="Barre de progression"
        max="100"
        value="21"
      />

      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro">
          <h2 className="titles"> Présentez vous auprès des parents</h2>
          <p className="description-aera-pro texts">
            Présentez vous et décrivez votre expérience. Indiquez les activités
            d'éveil que vous proposez aux enfants : respect du rythme de
            l'enfant, activités, sorties, pédagogie, ...
            <br />
            Décrivez les espaces de jeu, le lieu de sommeil, les équipements
            dont vous disposez.
          </p>
          <textarea
            className="description-pro-text-aera texts"
            name="nursery-description"
            cols="155"
            minLength="50"
            maxLength="155"
            autoCapitalize="sentences"
            placeholder="Ecrivez votre description ici"
          />

          {/* Redirection to screen 3 of professional registration */}
          <nav className="nav-buttons-pro-register">
            <NavLink to="/" className="navlink-prev-pro screen4 texts">
              <p>&lt; Retour</p>
            </NavLink>
            {/* Redirection to screen 5 of professional registration */}
            <NavLink to="/" className="navlink-next-pro screen4 texts">
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
            <h2 className="titles title-descriptif-structure">
              Inspirez vous des annonces Babyplace
            </h2>
            <section className="profile-picture-container">
              <img
                src="../src/assets/images/illustration/avatar_lorem.jpg"
                alt="avatar du profil professionnel"
                className="profile-picture-pro-adaptatif"
              />
              <section>
                <h3 className="profil-name texts">Les Lutins Terribles</h3>
                <p className="texts">
                  Crèche multi-accueil
                  <br />
                  Membre depuis 2019
                </p>
              </section>
            </section>
            <p className="text-descriptif-structure texts">
              La crèche "Les Lutins Terribles" agrée 2013 vous propose ses
              services pour garder votre ou vos enfants dans sa structure.
              <br />
              Disposant d'un extérieur avec une aire de jeu et proche du tram.
              <br />
              Nous sommes une structure avec 4 professionnelles prête à
              accueillir vos lutins les plus terribles.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default DescriptionComponent;
