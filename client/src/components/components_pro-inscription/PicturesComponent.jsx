import {
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import PropTypes from "prop-types";

import "../styles_components/PicturesComponent.css";

function PicturesComponent({ setComponent }) {
  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 3 ----- */}
      <progress
        className="advanced-line-1"
        name="Barre de progression"
        max="100"
        value="14"
      />

      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro adaptatif-left-part-pictures">
          <h2 className="titles">Ajoutez votre photo de profil</h2>
          <section className="profile-picture-container">
            <Avatar
              size="lg"
              radius="full"
              variant="shadow"
              src="../src/assets/images/illustration/avatar.png"
              style={{ width: "150px", height: "150px" }}
            />
            <Dropdown>
              <DropdownTrigger>
                <Button variant="shadow" size="lg" color="secondary">
                  Photo de profil
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Action event example">
                <DropdownItem key="add picture">
                  <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                    Ajouter une photo de profil
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </DropdownItem>
                <DropdownItem key="edit picture">
                  <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                    Modifier ma photo de profil
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </DropdownItem>
                <DropdownItem
                  key="delete picture"
                  className="text-danger"
                  color="danger"
                >
                  Supprimer la photo
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </section>
          <section className="pictures-description-import">
            <h2 className="titles">Egayer votre annonce avec des photos</h2>
            <p className="texts">
              Prenez des photos avec un téléphone ou un appareil photo.
              <br />
              Téléchargez au moins une photo pour publier votre annonce.
              <br />
              Vous pourrez toujours en ajouter d'autres ou apporter des
              modifications par la suite.
            </p>
            <Dropdown className="w-80">
              <DropdownTrigger>
                <Button variant="shadow" size="lg" color="secondary">
                  Photos de votre structure
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Action event example">
                <DropdownItem key="add picture">
                  <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                    Ajouter une/des photo(s)
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </DropdownItem>
                <DropdownItem key="edit picture">
                  <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                    Modifier une/des photo(s)
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </DropdownItem>
                <DropdownItem
                  key="delete picture"
                  className="text-danger"
                  color="danger"
                >
                  Supprimer la photo
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </section>
          <nav className="adaptatif-nav-buttons">
            <section className="display-buttons">
              {/* Redirection to previous screen of professional registration */}
              <Button
                onClick={() => setComponent("LocalisationComponent")}
                variant="shadow"
                className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                size="lg"
              >
                Retour
              </Button>
              {/* Redirection to next screen of professional registration */}
              <Button
                onClick={() => setComponent("DescriptionComponent")}
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

// Validation des props
PicturesComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default PicturesComponent;
