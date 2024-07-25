import PropTypes from "prop-types";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";
import { Textarea } from "@nextui-org/input";
import { useNurseryLogged } from "../../contexts/NurseryDataContext";

import "../styles_components/DescriptionComponent.css";

function DescriptionComponent({ setComponent }) {
  const { nurseryData, fetchNursery } = useNurseryLogged();

  const [formState, setFormState] = useState({
    description: "",
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
      description_nursery:
        formState.description === ""
          ? nurseryData.description_nursery
          : formState.description,
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
      setComponent("DetailDescriptionComponent");
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
          value="21"
        />

        {/* ----- full screen ----- */}
        <section className="global-container-register-pro">
          {/* ----- Left part of the screen ------ */}
          <form
            onSubmit={handleSubmit}
            className="left-part-container-register-pro"
          >
            <h2 className="titles"> Présentez vous auprès des parents</h2>
            <p className="description-aera-pro texts">
              Présentez vous et décrivez votre expérience. Indiquez les
              activités d'éveil que vous proposez aux enfants : respect du
              rythme de l'enfant, activités, sorties, pédagogie, ...
              <br />
              Décrivez les espaces de jeu, le lieu de sommeil, les équipements
              dont vous disposez.
            </p>
            <Textarea
              variant="faded"
              name="description"
              size="lg"
              defaultValue={nurseryData.description_nursery || ""}
              onChange={handleInputChange}
              color="secondary"
              label="description"
              placeholder="Ecrivez votre description ici"
              description="Ecrivez une description détaillant votre structure."
              className=" w-full max-h-lg"
            />

            <nav className="adaptatif-nav-buttons">
              <section className="display-buttons">
                {/* Redirection to previous screen of professional registration */}
                <Button
                  onClick={() => setComponent("PicturesComponent")}
                  variant="shadow"
                  className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                  size="lg"
                >
                  Retour
                </Button>
                {/* Redirection to next screen of professional registration */}
                <Button
                  type="submit"
                  variant="shadow"
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
            <section className="descritif-background adaptatif-descritif-background">
              <h2 className="titles title-descriptif-structure">
                Inspirez vous des annonces Babyplace
              </h2>
              <User
                size="lg"
                name="Les Lutins Terribles"
                description="Crèche multi-accueil"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                  size: "lg",
                }}
              />
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

// Validation des props
DescriptionComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default DescriptionComponent;
