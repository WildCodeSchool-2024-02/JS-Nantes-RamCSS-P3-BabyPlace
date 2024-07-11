import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { Input } from "@nextui-org/input";
import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import "../styles_components/SecurityComponent.css";

function SecurityComponent({ setComponent }) {
  // * States déclarations

  const [formState, setFormState] = useState({
    siret: "",
    approval: "",
    insuranceHomeNumber: "",
    insuranceHomeName: "",
    insuranceHomeAddress: "",
  });

  const [checkNextButton, setCheckNextButton] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  // * conditions for unlocking the “Next” button

  useEffect(() => {
    const {
      siret,
      approval,
      insuranceHomeNumber,
      insuranceHomeName,
      insuranceHomeAddress,
    } = formState;
    const isFormValid =
      siret.trim() !== "" &&
      approval.trim() !== "" &&
      insuranceHomeNumber.trim() !== "" &&
      insuranceHomeName.trim() !== "" &&
      insuranceHomeAddress.trim() !== "" &&
      isCheckboxChecked;
    setCheckNextButton(isFormValid);
  }, [formState, isCheckboxChecked]);

  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 0 ----- */}
      <progress
        className="advanced-line-0"
        name="Barre de progression"
        max="100"
        value="100"
      />

      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro">
          <section className="bloc-security-content">
            <section className="security-input-container">
              <section>
                <h3 className="titles little-titles-security">Vérifications</h3>
                <p className="texts">
                  {" "}
                  Nous avons besoin d'effectuer une dernière vérification avant
                  validation définitive de votre compte :
                </p>
                <Input
                  isRequired
                  type="text"
                  variant="bordered"
                  color="secondary"
                  label="Numéro de SIRET"
                  description="Indiquez le n° de SIRET de votre structure (uniquement des chiffres sans espace)."
                  className="w-[580px] texts"
                  size="lg"
                  placeholder="Ex : 36252187900034"
                  name="siret"
                  onChange={handleInputChange}
                />
                <section className="input-flex-content">
                  <Input
                    isRequired
                    type="text"
                    variant="bordered"
                    color="secondary"
                    label="Numéro d'agrément"
                    description="Indiquez votrez numéro d'aggrément."
                    className="max-w-[284px] texts"
                    size="lg"
                    placeholder="Ex : 36252187900034"
                    name="approval"
                    onChange={handleInputChange}
                  />
                  <DatePicker
                    isRequired
                    label="Date de votre agrément"
                    variant="bordered"
                    color="secondary"
                    size="lg"
                    name="approvalDate"
                    description="Indiquez la date d'attribution de votre aggrément."
                    className="max-w-[284px] texts"
                  />
                </section>
              </section>
              <section className="global-insurance-content">
                <h3 className="titles little-titles-security">Assurances</h3>
                <section className="input-flex-content">
                  <Input
                    isRequired
                    type="text"
                    variant="bordered"
                    color="secondary"
                    label="Nom de l'assureur habitation"
                    description="Indiquez le nom de votre assureur."
                    className="max-w-[284px] texts"
                    size="lg"
                    placeholder="Ex : Julien Assurances"
                    name="insuranceHomeName"
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    type="text"
                    variant="bordered"
                    color="secondary"
                    label="Coordonnées de l'assureur"
                    description="Indiquez l'adresse de votre."
                    className="max-w-[284px] texts"
                    size="lg"
                    placeholder="Ex : 1 rue de la Soif, 44000 MAO"
                    name="insuranceHomeAddress"
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    type="text"
                    variant="bordered"
                    color="secondary"
                    label="Numéro de police"
                    description="Indiquez le numéro de votre police d'assurance."
                    className="max-w-[284px] texts"
                    size="lg"
                    placeholder="Ex : 36252187900034"
                    name="insuranceHomeNumber"
                    onChange={handleInputChange}
                  />
                </section>
                <section className="input-flex-content">
                  <Input
                    type="text"
                    variant="bordered"
                    color="secondary"
                    label="Nom de l'assureur automobile"
                    description="Indiquez le nom de votre assureur."
                    className="max-w-[284px] texts"
                    size="lg"
                    placeholder="Ex : Julien Assurances"
                    name="insuranceCarName"
                  />
                  <Input
                    type="text"
                    variant="bordered"
                    color="secondary"
                    label="Coordonnées de l'assureur"
                    description="Indiquez l'adresse de votre."
                    className="max-w-[284px] texts"
                    size="lg"
                    placeholder="Ex : 1 rue de la Soif, 44000 MAO"
                    name="insuranceCarAdress"
                  />
                  <Input
                    type="text"
                    variant="bordered"
                    color="secondary"
                    label="Numéro de police"
                    description="Indiquez le numéro de votre police d'assurance."
                    className="max-w-[284px] texts"
                    size="lg"
                    placeholder="Ex : 36252187900034"
                    name="insuranceCarNumber"
                  />
                </section>
              </section>
              <Checkbox
                color="secondary"
                className="texts"
                onChange={handleCheckboxChange}
              >
                Je valide la veracité de mon profil
              </Checkbox>
            </section>
          </section>

          <nav className="adaptatif-nav-buttons">
            <section className="display-buttons">
              {/* Redirection to prev screen of professional registration */}
              <Button
                onClick={() => setComponent("SummaryComponent")}
                variant="shadow"
                className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                size="lg"
              >
                Retour
              </Button>
              {/* Redirection to next screen of professional registration */}
              <Button
                isDisabled={!checkNextButton}
                onClick={() => setComponent("SecurityComponent")}
                variant="shadow"
                className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                size="lg"
              >
                Enregistrer et quitter
              </Button>
            </section>
          </nav>
        </section>
        {/* ----- Right part of the screen ------ */}
        <section className="right-part-container-register-pro">
          <section className="descritif-background">
            <h2 className="titles title-descriptif-structure">
              Rassurez les parents
            </h2>
            <p className="text-descriptif-structure texts">
              {" "}
              Un profil avec 100% des documents nécessaires trouve des enfants à
              garder 4 fois plus vite qu'une structure dont le profil n'est pas
              complet.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

// Props Validation
SecurityComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default SecurityComponent;
