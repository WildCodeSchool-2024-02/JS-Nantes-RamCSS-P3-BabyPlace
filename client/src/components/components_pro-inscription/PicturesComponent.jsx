import { NavLink } from "react-router-dom";

import "../styles_components/PicturesComponent.css";

function PicturesComponent() {
  return (
    <section>
      {/* ----- Visual indicating the progress of registration => level 3 ----- */}
      <progress
        className="advanced-line-1"
        name="Barre de progression"
        max="100"
        value="20"
      />

      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro">
          <h2 className="titles">Ajoutez votre photo de profil</h2>
          <section className="profile-picture-container">
            <img
              className="profile-picture-pro"
              src="../src/assets/images/illustration/avatar.png"
              alt="avatar du profil"
            />
            <button type="submit" className="button-photos-pro texts">
              Télécharger votre photo
            </button>
          </section>
          <h2 className="titles">Egayer votre annonce avec des photos</h2>
          <p className="texts">
            Prenez des photos avec un téléphone ou un appareil photo.
            <br />
            Téléchargez au moins une photo pour publier votre annonce.
            <br />
            Vous pourrez toujours en ajouter d'autres ou apporter des
            modifications par la suite.
          </p>
          <button
            type="submit"
            className="button-photos-pro adaptatif-button-photos-pro texts"
          >
            Télécharger vos photos
          </button>
          {/* Redirection to screen 2 of professional registration */}
          <nav className="nav-buttons-pro-register">
            <NavLink to="/" className="navlink-prev-pro screen2 texts">
              <p>&lt; Retour</p>
            </NavLink>
            {/* Redirection to screen 4 of professional registration */}
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
            <h2 className="titles title-descriptif-structure">
              Conseils rapides pour des photos de qualité
            </h2>
            <p className="text-descriptif-structure texts">
              Veillez à ce que votre photo de profil montre clairement votre
              visage.
            </p>
            <p className="text-descriptif-structure texts">
              Désencombrez votre pièce.
              <br />
              Utilisez la lumière naturelle du jour et évitez le flash.
              <br />
              Prenez des photos en mode paysage depuis le coin des pièces.
              <br />
              Centrez la prise de vue à égale distance entre le sol et le
              plafond.
              <br />
              Mettez en valeur les équipements et jeux d'éveil.
              <br />
              Ajoutez des photos de toutes les pièces auxquelles les enfants ont
              accès.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default PicturesComponent;
