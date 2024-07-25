// import { useState } from "react";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import PropTypes from "prop-types";
import { useNurseryLogged } from "../../contexts/NurseryDataContext";

import "../styles_components/PicturesComponent.css";

function PicturesComponent({ setComponent }) {
  const { nurseryData, fetchNursery } = useNurseryLogged();
  // const [photo1, setPhoto1] = useState(null);
  // const [photo2, setPhoto2] = useState(null);

  // const handleFileChange1 = (e) => {

  //   setPhoto1(e.target.files[0]);
  // };

  // const handleFileChange2 = (e) => {

  //   setPhoto2(e.target.files[0]);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: nurseryData.name,
      phone: nurseryData.phone,
      type_of_nursery: nurseryData.type_of_nursery,
      siret: nurseryData.siret,
      address: nurseryData.address,
      postcode: nurseryData.postcode,
      city: nurseryData.city,
      capacity: nurseryData.capacity,
      opening_hours: nurseryData.opening_hours,
      closing_time: nurseryData.closing_time,
      hourly_price: nurseryData.hourly_price,
      agrement: nurseryData.agrement,
      photo_1: nurseryData.photo_1,
      photo_2: nurseryData.photo_2,
      photo_3: nurseryData.photo_3,
      description_nursery: nurseryData.description_nursery,
      disabled_children: nurseryData.disabled_children,
      outdoor_space: nurseryData.outdoor_space,
      presence_of_animals: nurseryData.presence_of_animals,
      meal: nurseryData.meal,
      hygiene_product: nurseryData.hygiene_product,
      music_workshop: nurseryData.music_workshop,
      artistic_activities: nurseryData.artistic_activities,
      bilingual_international: nurseryData.bilingual_international,
      child_transport: nurseryData.child_transport,
      code_of_conduct: nurseryData.code_of_conduct,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/nurseries/${nurseryData.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erreur lors de la mise à jour de la crèche:", errorData);
        console.warn(`Erreur: ${errorData.message || response.statusText}`);
        return;
      }
      fetchNursery();
      setComponent("DescriptionComponent");
    } catch (error) {
      console.error("Erreur réseau ou autre:", error);
      console.warn("Tous les champs requis n'ont pas été renseignés.");
    }
  };

  if (nurseryData)
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
          <form
            onSubmit={handleSubmit}
            className="left-part-container-register-pro adaptatif-left-part-pictures"
          >
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
                <DropdownMenu
                  aria-label="Action event example"
                  disabledKeys={["add-picture", "edit-picture"]}
                >
                  <DropdownItem
                    key="add-picture"
                    textValue="Ajouter une photo de profil"
                  >
                    <label htmlFor="file-upload1" style={{ cursor: "pointer" }}>
                      Ajouter une photo de profil{" "}
                      <strong>bientôt disponible</strong>
                    </label>
                    <input
                      id="file-upload1"
                      type="file"
                      accept="image/*"
                      // onChange={handleFileChange1}
                      style={{ display: "none" }}
                    />
                  </DropdownItem>
                  <DropdownItem
                    key="edit-picture"
                    textValue="Modifier ma photo de profil"
                  >
                    <label htmlFor="file-upload1" style={{ cursor: "pointer" }}>
                      Modifier ma photo de profil{" "}
                      <strong>bientôt disponible</strong>
                    </label>
                    <input
                      id="file-upload1"
                      type="file"
                      accept="image/*"
                      // onChange={handleFileChange1}
                      style={{ display: "none" }}
                    />
                  </DropdownItem>
                  {/* <DropdownItem
                    key="delete picture"
                    className="text-danger"
                    color="danger"
                  >
                    Supprimer la photo
                  </DropdownItem> */}
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
                <DropdownMenu
                  aria-label="Action event example"
                  disabledKeys={["add-picture", "edit-picture"]}
                >
                  <DropdownItem
                    key="add-picture"
                    textValue="Ajouter des photos"
                  >
                    <label htmlFor="file-upload2" style={{ cursor: "pointer" }}>
                      Ajouter une/des photo(s){" "}
                      <strong>bientôt disponible</strong>
                    </label>
                    <input
                      id="file-upload2"
                      type="file"
                      // onChange={handleFileChange2}
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </DropdownItem>
                  <DropdownItem
                    key="edit-picture"
                    textValue="Modifier mes photos"
                  >
                    <label htmlFor="file-upload2" style={{ cursor: "pointer" }}>
                      Modifier une/des photo(s){" "}
                      <strong>bientôt disponible</strong>
                    </label>
                    <input
                      id="file-upload2"
                      type="file"
                      // onChange={handleFileChange2}
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </DropdownItem>
                  {/* <DropdownItem
                    key="delete picture"
                    className="text-danger"
                    color="danger"
                  >
                    Supprimer la photo
                  </DropdownItem> */}
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
                  variant="shadow"
                  type="submit"
                  className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                  size="lg"
                >
                  Suivant
                </Button>
              </section>
            </nav>
          </form>

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
                Ajoutez des photos de toutes les pièces auxquelles les enfants
                ont accès.
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
