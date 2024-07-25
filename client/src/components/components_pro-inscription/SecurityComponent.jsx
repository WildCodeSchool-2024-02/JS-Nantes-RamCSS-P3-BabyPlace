import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { useNurseryLogged } from "../../contexts/NurseryDataContext";

import "../styles_components/SecurityComponent.css";

function SecurityComponent({ setComponent }) {
  const { nurseryData, fetchNursery } = useNurseryLogged();

  const navigate = useNavigate();

  // * States déclarations
  const [checkNextButton, setCheckNextButton] = useState(false);

  const [formState, setFormState] = useState({
    siret: nurseryData?.siret ?? "",
    approval: nurseryData?.agrement ?? "",
    validationProfil: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name) => (event) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: event.target.checked,
    }));
    setCheckNextButton(true);
  };

  // * conditions for unlocking the “Next” button

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: nurseryData.name,
      phone: nurseryData.phone,
      type_of_nursery: nurseryData.type_of_nursery,
      siret: formState.siret || nurseryData.siret,
      address: nurseryData.address,
      postcode: nurseryData.postcode,
      city: nurseryData.city,
      capacity: nurseryData.capacity,
      opening_hours: nurseryData.opening_hours,
      closing_time: nurseryData.closing_time,
      hourly_price: nurseryData.hourly_price,
      agrement: formState.approval || nurseryData.agrement,
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
      code_of_conduct: formState.validationProfil,
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
      navigate("/pro/dashboard");
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
          value="100"
        />

        {/* ----- full screen ----- */}
        <section className="global-container-register-pro">
          {/* ----- Left part of the screen ------ */}
          <form
            onSubmit={handleSubmit}
            className="left-part-container-register-pro"
          >
            <section className="bloc-security-content">
              <section className="security-input-container">
                <section>
                  <h3 className="titles little-titles-security">
                    Vérifications
                  </h3>
                  <p className="texts">
                    {" "}
                    Nous avons besoin d'effectuer une dernière vérification
                    avant validation définitive de votre compte :
                  </p>
                  <Input
                    isRequired
                    type="text"
                    variant="bordered"
                    color="secondary"
                    label="Numéro de SIRET"
                    description="Indiquez le n° de SIRET de votre structure (uniquement des chiffres sans espace)."
                    className="w-[580px] texts"
                    defaultValue={nurseryData.siret}
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
                      defaultValue={nurseryData.agrement}
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
                    />
                  </section>
                </section>
                <Checkbox
                  color="secondary"
                  className="texts"
                  value="validationProfil"
                  checked={formState.validationProfil}
                  onChange={handleCheckboxChange("validationProfil")}
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
                  type="submit"
                  variant="shadow"
                  className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                  size="lg"
                >
                  Enregistrer et quitter
                </Button>
              </section>
            </nav>
          </form>
          {/* ----- Right part of the screen ------ */}
          <section className="right-part-container-register-pro">
            <section className="descritif-background">
              <h2 className="titles title-descriptif-structure">
                Rassurez les parents
              </h2>
              <p className="text-descriptif-structure texts">
                {" "}
                Un profil avec 100% des documents nécessaires trouve des enfants
                à garder 4 fois plus vite qu'une structure dont le profil n'est
                pas complet.
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
