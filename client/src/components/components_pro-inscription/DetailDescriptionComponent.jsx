import PropTypes from "prop-types";

import { useState } from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { useNurseryLogged } from "../../contexts/NurseryDataContext";

import "../styles_components/DetailDescriptionComponent.css";

function DetailDescriptionComponent({ setComponent }) {
  const { nurseryData, fetchNursery } = useNurseryLogged();

  const [formState, setFormState] = useState({
    transport: nurseryData.child_transport ?? false,
    international: nurseryData.bilingual_international ?? false,
    artistic: nurseryData.artistic_activities ?? false,
    music: nurseryData.music_workshop ?? false,
    hygiene: nurseryData.hygiene_product ?? false,
    meal: nurseryData.meal ?? false,
    pets: nurseryData.presence_of_animals ?? false,
    garden: nurseryData.outdoor_space ?? false,
    disability: nurseryData.disabled_children ?? false,
  });

  const handleCheckboxChange = (name) => (event) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: event.target.checked,
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
      description_nursery: nurseryData.description_nursery,
      disabled_children: formState.disability,
      outdoor_space: formState.garden,
      presence_of_animals: formState.pets,
      meal: formState.meal,
      hygiene_product: formState.hygiene,
      music_workshop: formState.music,
      artistic_activities: formState.artistic,
      bilingual_international: formState.international,
      child_transport: formState.transport,
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
      setComponent("UseConditionComponent");
    } catch (error) {
      console.error("Erreur réseau ou autre:", error);
      console.warn("Tous les champs requis n'ont pas été renseignés.");
    }
  };

  if (nurseryData)
    return (
      <section className="adaptatif-global-container-detail">
        {/* ----- Visual indicating the progress of registration => level 3 ----- */}
        <progress
          className="adaptatif-advanced-line-1"
          name="Barre de progression"
          max="100"
          value="28"
        />

        {/* ----- full screen ----- */}
        <section className="global-container-detail">
          <section className="container-without-progress-bar">
            {/* ----- Left part of the screen ------ */}

            <form
              onSubmit={handleSubmit}
              className="left-part-container-register-pro"
            >
              <section className="adaptatif-left-part-detail">
                <h2 className="titles">Les petits plus de votre structure</h2>
                <p className="texts">
                  {" "}
                  Il s'agit en général des services que les parents souhaitent
                  retrouver pour l'accueil de leurs enfants. Vous pourrez
                  ajouter d'autres après la publication.
                </p>
                <section className="detail-checks">
                  <h3 className="titles little-titles-details">Formations</h3>
                  <CheckboxGroup
                    label="Sélectionnez les formations que vous possédez :"
                    color="secondary"
                  >
                    {/* <Checkbox value="psc1">
                      Formation premier secours (PCSC1)
                    </Checkbox> */}
                    {/* <Checkbox value="nesting">
                      Formation Nesting (pollution intérieure)
                    </Checkbox> */}
                    {/* <Checkbox value="montessori">
                      Pédagogie Montessori | Pikler Loczy
                    </Checkbox> */}
                    <Checkbox
                      checked={formState.disability}
                      onChange={handleCheckboxChange("disability")}
                      value="disability"
                    >
                      Formation accueil d'enfant handicapés
                    </Checkbox>
                  </CheckboxGroup>
                </section>
                <section className="detail-checks">
                  <h3 className="titles little-titles-details">Accueil</h3>
                  <CheckboxGroup
                    label="Sélectionnez les types d'accueils que vous proposez :"
                    color="secondary"
                  >
                    <Checkbox
                      value="garden"
                      checked={formState.garden}
                      onChange={handleCheckboxChange("garden")}
                    >
                      Espace extérieur | jardin
                    </Checkbox>
                    {/* <Checkbox value="outing">Sorties extérieures</Checkbox> */}
                    <Checkbox
                      value="pets"
                      checked={formState.pets}
                      onChange={handleCheckboxChange("pets")}
                    >
                      Présence d'animaux
                    </Checkbox>
                    {/* <Checkbox value="disability">
                      0% pollution intérieure
                    </Checkbox> */}
                    <Checkbox
                      value="meal"
                      checked={formState.meal}
                      onChange={handleCheckboxChange("meal")}
                    >
                      Repas fournis
                    </Checkbox>
                    <Checkbox
                      value="hygiene"
                      checked={formState.hygiene}
                      onChange={handleCheckboxChange("hygiene")}
                    >
                      Produits d'hygiène fournis
                    </Checkbox>
                  </CheckboxGroup>
                </section>
                <section className="detail-checks">
                  <h3 className="titles little-titles-details">Activités</h3>
                  <CheckboxGroup
                    label="Sélectionnez les types d'activités que vous proposez :"
                    color="secondary"
                  >
                    {/* <Checkbox value="walk">Promenades</Checkbox> */}
                    {/* <Checkbox value="awakening">Activités d'éveil</Checkbox> */}
                    <Checkbox
                      value="music"
                      checked={formState.music}
                      onChange={handleCheckboxChange("music")}
                    >
                      Atelier musique
                    </Checkbox>
                    <Checkbox
                      value="artistic"
                      checked={formState.artistic}
                      onChange={handleCheckboxChange("artistic")}
                    >
                      Activités artistiques
                    </Checkbox>
                    <Checkbox
                      value="international"
                      checked={formState.international}
                      onChange={handleCheckboxChange("international")}
                    >
                      Bilingue | internationale
                    </Checkbox>
                    {/* <Checkbox value="ram">
                        Bibliothèque | Ludothèque | RAM
                      </Checkbox> */}
                    <Checkbox
                      name="transport"
                      value="transport"
                      checked={formState.transport}
                      onChange={handleCheckboxChange("transport")}
                    >
                      Transport d'enfants
                    </Checkbox>
                  </CheckboxGroup>
                </section>
                {/* </section> */}
                {/* <section className="detail-checks">
                  <h3 className="titles little-titles-details">
                    Liens avec les parents
                  </h3>
                  <CheckboxGroup
                    label="Sélectionnez les types de liens avec les parents que vous proposez :"
                    color="secondary"
                  >
                    <Checkbox value="albums">Albums photos</Checkbox>
                  </CheckboxGroup>
                </section> */}
              </section>

              <nav className="adaptatif-nav-buttons">
                <section className="display-buttons">
                  {/* Redirection to screen 2 of professional registration */}
                  <Button
                    onClick={() => setComponent("DescriptionComponent")}
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
            <section className="right-part-container-register-pro adaptatif-right-part-detail">
              <section className="descritif-background adaptatif-descritif-background">
                <h2 className="titles title-descriptif-structure">
                  Valorisez votre expérience et vos services
                </h2>
                <p className="text-descriptif-structure texts">
                  N'hésitez pas à expliquer en détail vos formations et tout
                  votre passé de garde d'enfant.
                  <br />
                  Différenciez-vous par des compétences ou des qualités inédites
                  (blog de nounou, ménage écologique, horaires décalés, ...)
                </p>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
}

// Validation des props
DetailDescriptionComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default DetailDescriptionComponent;
