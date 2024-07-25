import PropTypes from "prop-types";

import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useNurseryLogged } from "../../contexts/NurseryDataContext";

import "../styles_components/PriceComponent.css";

function PriceComponent({ setComponent }) {
  const { nurseryData, fetchNursery } = useNurseryLogged();

  const [selected1, setSelected1] = useState("no");
  const [selected2, setSelected2] = useState("no");
  const [selected3, setSelected3] = useState("no");

  const [formState, setFormState] = useState({
    price: "",
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
      address: nurseryData.address,
      postcode: nurseryData.postcode,
      city: nurseryData.city,
      name: nurseryData.name,
      phone: nurseryData.phone,
      type_of_nursery: nurseryData.type_of_nursery,
      siret: nurseryData.siret,
      capacity: nurseryData.capacity,
      opening_hours: nurseryData.opening_hours,
      closing_time: nurseryData.closing_time,
      hourly_price:
        formState.price === "" ? nurseryData.hourly_price : formState.price,
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
      setComponent("SummaryComponent");
    } catch (error) {
      console.error("Erreur réseau ou autre:", error);
      console.warn("Erreur réseau, veuillez réessayer plus tard.");
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
          value="63"
        />

        {/* ----- full screen ----- */}
        <section className="global-container-register-pro">
          {/* ----- Left part of the screen ------ */}
          <form
            onSubmit={handleSubmit}
            className="left-part-container-register-pro left-part-adaptatif-price"
          >
            <section className="global-price-container">
              <h2 className="titles">Le tarif horaire</h2>
              <p className="texts">
                Vous pourrez changer ce tarif à tout moment dans votre compte.
              </p>
              <Input
                isRequired
                type="number"
                label="Tarif horaire"
                color="secondary"
                labelPlacement="inside"
                className="max-w-lg texts"
                size="lg"
                min="0"
                name="price"
                variant="bordered"
                defaultValue={nurseryData.hourly_price}
                placeholder="Indiquez votre tarif"
                onChange={handleInputChange}
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-medium">€</span>
                  </div>
                }
              />
              <Input
                type="number"
                label="Heures complémentaires majorées"
                color="secondary"
                labelPlacement="inside"
                className="max-w-lg texts"
                size="lg"
                min="0"
                variant="bordered"
                placeholder="Indiquez votre tarif"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-medium">€</span>
                  </div>
                }
              />
            </section>
            <section>
              <section>
                <h2 className="titles">Les services d'accueil</h2>
                <p className="texts">
                  Déterminez les services que vous proposez soit de manière
                  obligatoire (les parents sont obligés de souscrire à ce
                  service), soit de manière optionnelle (les parents peuvent
                  choisir d'y souscrire ou pas).
                </p>
                <section className="complementary-services">
                  <section className="text-complementary-services">
                    <p>
                      <strong>Indemnités d'entretien</strong>
                    </p>
                    <p>Frais courants</p>
                  </section>
                  <Tabs
                    selectedKey={selected1}
                    onSelectionChange={setSelected1}
                    size="lg"
                    aria-label="Indemnité d'entretien? Oui / Non"
                    variant="bordered"
                    color="secondary"
                  >
                    <Tab key="no" title="Non" />
                    <Tab key="yes" title="Oui" />
                  </Tabs>
                  <Input
                    isDisabled={selected1 === "no"}
                    type="number"
                    min="0"
                    color="secondary"
                    label="Indemnités d'entretien"
                    variant="bordered"
                    placeholder="Indiquez votre tarif"
                    className="max-w-[220px]"
                  />
                </section>
                <section className="complementary-services-container">
                  <section className="complementary-services">
                    <section className="text-complementary-services">
                      <p>
                        <strong>Indemnités de repas</strong>
                      </p>
                      <p>Lorsque vous préparez les repas</p>
                    </section>
                    <Tabs
                      selectedKey={selected2}
                      onSelectionChange={setSelected2}
                      size="lg"
                      aria-label="Indemnité repas? Oui / Non"
                      variant="bordered"
                      color="secondary"
                    >
                      <Tab key="no" title="Non" />
                      <Tab key="yes" title="Oui" />
                    </Tabs>
                    <Input
                      isDisabled={selected2 === "no"}
                      type="number"
                      min="0"
                      color="secondary"
                      label="Indemnités de repas"
                      variant="bordered"
                      placeholder="Indiquez votre tarif"
                      className="max-w-[220px]"
                    />
                  </section>
                  <section className="complementary-services">
                    <section className="text-complementary-services">
                      <p>
                        <strong>Indemnités kilométriques</strong>
                      </p>
                      <p>Lorsque vous utilisez votre véhicule</p>
                    </section>
                    <Tabs
                      selectedKey={selected3}
                      onSelectionChange={setSelected3}
                      size="lg"
                      aria-label="Indemnité kilométrique? Oui / Non"
                      variant="bordered"
                      color="secondary"
                    >
                      <Tab key="no" title="Non" />
                      <Tab key="yes" title="Oui" />
                    </Tabs>
                    <Input
                      isDisabled={selected3 === "no"}
                      type="number"
                      min="0"
                      color="secondary"
                      label="Indemnités kilométriques"
                      variant="bordered"
                      placeholder="Indiquez votre tarif"
                      className="max-w-[220px]"
                    />
                  </section>
                </section>
              </section>
            </section>

            <nav className="adaptatif-nav-buttons">
              <section className="display-buttons">
                {/* Redirection to prev screen of professional registration */}
                <Button
                  onClick={() => setComponent("AvaibleSeatsComponent")}
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
            <section className="descritif-background">
              <img
                src="../src/assets/images/illustration/ampoule.png"
                alt="Visuel d'une ampoule"
                className="image-descriptif-structure"
              />
              <h2 className="titles title-descriptif-structure">
                Commencez avec un prix plus bas pour attirer les réservations.
              </h2>
              <p className="text-descriptif-structure texts">
                Les nouveaux professionnels inscrits sur Babyplace commencent
                avec un prix bas pour attirer leurs premières réservations.
              </p>
              <p className="text-descriptif-structure texts">
                Ils ont ainsi plus d'avis de la part de parents, ce qui leur
                permet de gagner en crédibiltié.
              </p>
            </section>
          </section>
        </section>
      </section>
    );
}

// Validation des props
PriceComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default PriceComponent;
