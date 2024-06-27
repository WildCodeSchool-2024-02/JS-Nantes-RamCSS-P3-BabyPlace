import { useState, useEffect } from "react";
import { Button, Input, CheckboxGroup } from "@nextui-org/react";

import PropTypes from "prop-types";
import CustomCheckbox from "../../assets/nextUI/CustomCheckbox";

import "../styles_components/StructureComponent.css";

function StructureComponent({ setComponent }) {
  // * States déclarations

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    groupSelected: [],
  });

  const [checkNextButton, setCheckNextButton] = useState(false);

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

  // * conditions for unlocking the “Next” button

  useEffect(() => {
    const { name, phone, groupSelected } = formState;
    const isPhoneValid = /^\d{10}$/.test(phone.trim());
    const isFormValid =
      name.trim() !== "" && isPhoneValid && groupSelected.length > 0;
    setCheckNextButton(isFormValid);
  }, [formState]);

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
        <section className="left-part-container-register-pro global-left-content-structure">
          <section className="left-part-content-structure">
            <h2 className="titles">Quel type d'accueil proposez vous?</h2>
            {/* * Types of Nurseries */}
            <div className="flex flex-col gap-1 w-full">
              <CheckboxGroup
                className="gap-1 texts"
                color="secondary"
                label="Sélectionnez au moins un type d'accueil"
                orientation="horizontal"
                value={formState.groupSelected}
                onChange={handleGroupChange}
              >
                <CustomCheckbox value="Crèche parentale">
                  Crèche parentale
                </CustomCheckbox>
                <CustomCheckbox value="Micro-Crèche">
                  Micro-Crèche
                </CustomCheckbox>
                <CustomCheckbox value="Crèche d'entreprise">
                  Crèche d'entreprise
                </CustomCheckbox>
                <CustomCheckbox value="Halte garderie">
                  Halte garderie
                </CustomCheckbox>
                <CustomCheckbox value="Crèche collective">
                  Crèche collective
                </CustomCheckbox>
                <CustomCheckbox value="Crèche écologique">
                  Crèche écologique
                </CustomCheckbox>
                <CustomCheckbox value="Multi-Accueil">
                  Multi-Accueil
                </CustomCheckbox>
                <CustomCheckbox value="Crèche municipale">
                  Crèche municipale
                </CustomCheckbox>
                <CustomCheckbox value="Crèche associative">
                  Crèche associative
                </CustomCheckbox>
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
                placeholder="Ex : 08.00.00.00.00"
                name="phone"
                onChange={handleInputChange}
              />
            </section>
          </section>

          {/* Redirection to next screen of professional registration */}
          <nav className="nav-buttons-pro-register adaptatif-structure-nav-buttons">
            <Button
              isDisabled={!checkNextButton}
              onClick={() => setComponent("LocalisationComponent")}
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
            <img
              src="../src/assets/images/illustration/img_structure_ecran1.png"
              alt="Avatar"
              className="image-descriptif-structure"
            />
            <h2 className="titles title-descriptif-structure">
              Choississez votre catégorie d'annonce
            </h2>
            <p className="text-descriptif-structure texts">
              En sélectionnant les catégories adéquates, vous aidez les parents
              à savoir à quoi s'attendre concernant l'accueil de leur enfant au
              sein de votre structure.
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
