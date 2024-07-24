import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import PropTypes from "prop-types";
import { useNurseryLogged } from "../../contexts/NurseryDataContext";

import "../styles_components/LocalisationComponent.css";

function LocalisationComponent({ setComponent }) {
  const { nurseryData, fetchNursery } = useNurseryLogged();

  const [formState, setFormState] = useState({
    address: "",
    postcode: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      address:
        formState.address === "" ? nurseryData.address : formState.address,
      postcode:
        formState.postcode === "" ? nurseryData.postcode : formState.postcode,
      city: formState.city === "" ? nurseryData.city : formState.city,
      name: nurseryData.name,
      phone: nurseryData.phone,
      type_of_nursery: nurseryData.type_of_nursery,
      siret: nurseryData.siret,
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

      console.warn("La crèche a été mise à jour avec succès");
      fetchNursery();
      setComponent("PicturesComponent");
    } catch (error) {
      console.error("Erreur réseau ou autre:", error);
      console.warn("Erreur réseau, veuillez réessayer plus tard.");
    }
  };

  if (nurseryData)
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
          <form
            onSubmit={handleSubmit}
            className="left-part-container-register-pro  structure-left-part"
          >
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
                defaultValue={nurseryData.address}
                placeholder="Ex : 10 rue de la Soif"
                name="address"
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
                defaultValue={nurseryData.postcode}
                placeholder="Ex : 44830"
                name="postcode"
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
                defaultValue={nurseryData.city}
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
                  variant="shadow"
                  type="sumbit"
                  className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                  size="lg"
                >
                  Suivant
                </Button>
              </section>
            </nav>
          </form>

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
