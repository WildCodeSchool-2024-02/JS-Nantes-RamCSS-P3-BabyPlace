import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import PropTypes from "prop-types";
import { useNurseryLogged } from "../../contexts/NurseryDataContext";

import "../styles_components/StructureComponent.css";

function StructureComponent({ setComponent }) {
  const { nurseryData, fetchNursery } = useNurseryLogged();
  // * States déclarations

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    groupSelected: [],
  });

  const [isInvalid, setIsInvalid] = React.useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGroupChange = (value) => {
    setFormState((prevState) => ({
      ...prevState,
      groupSelected: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: formState.name === "" ? nurseryData.name : formState.name,
      phone: formState.phone === "" ? nurseryData.phone : formState.phone,
      type_of_nursery: formState.groupSelected,
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
      setComponent("LocalisationComponent");
    } catch (error) {
      console.error("Erreur réseau ou autre:", error);
      console.warn("Tous les champs requis n'ont pas été renseignés.");
    }
  };

  if (nurseryData)
    return (
      <section className="global-container-screen-register">
        {/* ----- Visual indicating the progress of registration => level 0 ----- */}
        <progress
          className="advanced-line-0"
          name="Barre de progression"
          max="100"
          value="0"
        />

        {/* ----- full screen ----- */}
        <section className="global-container-register-pro">
          {/* ----- Left part of the screen ------ */}
          <form
            onSubmit={handleSubmit}
            className="left-part-container-register-pro global-left-content-structure"
          >
            <section className="left-part-content-structure">
              <h2 className="titles">Quel type d'accueil proposez vous?</h2>
              {/* * Types of Nurseries */}
              <div className="flex flex-col gap-1 w-full">
                <CheckboxGroup
                  isInvalid={isInvalid}
                  className="gap-1 texts"
                  color="secondary"
                  label="Sélectionnez au moins un type d'accueil"
                  orientation="horizontal"
                  value={formState.groupSelected}
                  onChange={handleGroupChange}
                  onValueChange={(value) => {
                    setIsInvalid(value.length < 1);
                  }}
                >
                  <Checkbox value="Crèche parentale">Crèche parentale</Checkbox>
                  <Checkbox value="Micro-Crèche">Micro-Crèche</Checkbox>
                  <Checkbox value="Crèche d'entreprise">
                    Crèche d'entreprise
                  </Checkbox>
                  <Checkbox value="Halte garderie">Halte garderie</Checkbox>
                  <Checkbox value="Crèche collective">
                    Crèche collective
                  </Checkbox>
                  <Checkbox value="Crèche écologique">
                    Crèche écologique
                  </Checkbox>
                  <Checkbox value="Multi-Accueil">Multi-Accueil</Checkbox>
                  <Checkbox value="Crèche municipale">
                    Crèche municipale
                  </Checkbox>
                  <Checkbox value="Crèche associative">
                    Crèche associative
                  </Checkbox>
                </CheckboxGroup>
                <p className="mt-4 ml-1 text-default-500 texts">
                  Types d'accueils sélectionnés:{" "}
                  {formState.groupSelected.join("  |  ")}
                </p>
              </div>
            </section>
            <section className="left-part-content-structure">
              {/* Name & Phone number */}
              <h2 className="titles">Complétez et vérifiez vos informations</h2>
              <section className="global-input-container">
                <Input
                  isRequired
                  type="text"
                  variant="bordered"
                  color="secondary"
                  label="Nom de votre structure"
                  description="Ce champ est requis pour passer à la suite du formulaire."
                  className="w-[600px] texts"
                  size="lg"
                  defaultValue={nurseryData.name || ""}
                  placeholder="Ex : La crèche des petits lutins"
                  name="name"
                  onChange={handleInputChange}
                />
                <Input
                  isRequired
                  type="text"
                  variant="bordered"
                  color="secondary"
                  label="Numéro de téléphone"
                  description="Ce champ est requis pour passer à la suite du formulaire."
                  className="w-[600px] texts"
                  size="lg"
                  defaultValue={nurseryData.phone || ""}
                  placeholder="Ex : 0102030405"
                  name="phone"
                  onChange={handleInputChange}
                />
              </section>
            </section>

            {/* Redirection to next screen of professional registration */}
            <nav className="nav-buttons-pro-register adaptatif-structure-nav-buttons">
              <Button
                variant="shadow"
                type="submit"
                className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                size="lg"
              >
                Suivant
              </Button>
            </nav>
          </form>

          {/* ----- Right part of the screen ------ */}
          <section className="right-part-container-register-pro">
            <section className="descritif-background">
              <img
                src="../src/assets/images/illustration/img_structure_ecran1.png"
                alt="Avatar"
                className="image-descriptif-structure"
              />
              <h2 className="titles title-descriptif-structure">
                Choississez votre catégorie d'annonce
              </h2>
              <p className="text-descriptif-structure texts">
                En sélectionnant les catégories adéquates, vous aidez les
                parents à savoir à quoi s'attendre concernant l'accueil de leur
                enfant au sein de votre structure.
              </p>
            </section>
          </section>
        </section>
      </section>
    );
}

// Props Validation
StructureComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default StructureComponent;
