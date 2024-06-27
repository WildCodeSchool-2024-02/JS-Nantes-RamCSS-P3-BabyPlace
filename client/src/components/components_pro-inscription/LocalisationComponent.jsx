import { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";

import PropTypes from "prop-types";

import "../styles_components/LocalisationComponent.css";

function LocalisationComponent({ setComponent }) {
  // const inputRef = useRef(null); // VERSION DE NICOLAS EN VUE D'UNE OPTIMISATION

  const [formState, setFormState] = useState({
    adress: "",
    postCode: "",
    city: "",
  });

  const [checkNextButton, setCheckNextButton] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // * conditions for unlocking the “Next” button

  useEffect(() => {
    const { adress, postCode, city } = formState;
    const isPostCodeValid = /^\d{5}$/.test(postCode.trim());

    // VERSION DE NICOLAS EN VUE D'UNE OPTIMISATION
    // if (document.activeElement === inputRef.current) {
    //   console.log("COUCOU", inputRef.current.value.trim() !== "");
    // }
    const isFormValid =
      adress.trim() !== "" && isPostCodeValid && city.trim() !== "";
    setCheckNextButton(isFormValid);
  }, [formState]);

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
        <section className="left-part-container-register-pro  structure-left-part">
          <section className="adress-content">
            <h2 className="titles">Adresse postale</h2>
            <Input
              isRequired
              type="text"
              variant="bordered"
              color="secondary"
              label="N° et rue"
              description="Ce champ est requis pour passer à la suite du formulaire."
              className="w-[600px] texts"
              size="lg"
              placeholder="Ex : 10 rue de la Soif"
              name="adress"
              // ref={inputRef} // VERSION DE NICOLAS EN VUE D'UNE OPTIMISATION
              onChange={handleInputChange}
            />
          </section>
          {/* <section className="global-adaptatif-input-pro"> */}
          <section className="adress-content">
            <h2 className="titles">Code postal</h2>
            <Input
              isRequired
              type="text"
              variant="bordered"
              color="secondary"
              label="Code postal"
              description="Ce champ est requis pour passer à la suite du formulaire."
              className="w-[600px] texts"
              size="lg"
              placeholder="Ex : 44830"
              name="postCode"
              onChange={handleInputChange}
            />
          </section>
          <section className="adress-content">
            <h2 className="titles">Ville</h2>
            <Input
              isRequired
              type="text"
              variant="bordered"
              color="secondary"
              label="Commune"
              description="Ce champ est requis pour passer à la suite du formulaire."
              className="w-[600px] texts"
              size="lg"
              placeholder="Ex : Bouaye"
              name="city"
              onChange={handleInputChange}
            />
          </section>
          {/* </section> */}

          <nav className="adaptatif-nav-buttons">
            <section className="display-buttons">
              {/* Redirection to prev screen of professional registration */}
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
                isDisabled={!checkNextButton}
                onClick={() => setComponent("PicturesComponent")}
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
