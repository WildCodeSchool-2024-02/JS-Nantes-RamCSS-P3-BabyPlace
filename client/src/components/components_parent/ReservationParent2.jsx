import { useState } from "react";
import { Button } from "@nextui-org/button";
import { RadioGroup, Radio } from "@nextui-org/radio";

import PropTypes from "prop-types";
import "../styles_components/ReservationParent2.css";

function ChildSelection({ children, setComponent, selectDate }) {
  // Assurez-vous que 'children' est bien un tableau et qu'il contient des éléments
  const creche = JSON.parse(localStorage.getItem("selectedNursery"));

  // Si vous voulez afficher tous les enfants :
  const [formData, setFormData] = useState({
    message: "",
    reservation_date: "2024-07-12",
    reservation_status: "0",
    status_date: "2024-07-25",
    arriving_date: `${selectDate.arriving_date}`,
    exit_date: `${selectDate.exit_date}`,
    price: "55",
    nursery_id: `${creche.id}`,
    child_id: null, // Utilisez `null` pour représenter l'absence de sélection
  });

  const handleRadioChange = (e) => {
    const childId = e.target.value; // Utilisez la valeur du bouton radio sélectionné

    setFormData((prevData) => ({
      ...prevData,
      child_id: childId, // Mettez à jour l'ID de l'enfant sélectionné
    }));
  };

  const handleTextareaChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      message: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = "POST";
      const url = `${import.meta.env.VITE_API_URL}/api/reservations`;
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi des données");
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <form className="child-selection" onSubmit={handleSubmit}>
      <h1 className="child-selection-h1">Crèche Picoti Picota</h1>
      <div className="child-selection-details">
        <h2 className="child-selection-h2">Enfant à garder</h2>
        <RadioGroup
          className="child"
          label="Select your favorite city"
          color="secondary"
          defaultValue="london"
        >
          {children.map((e) => (
            <Radio
              key={e.id}
              name="child" // Tous les boutons radio partagent le même nom
              value={e.id} // La valeur du bouton radio
              checked={formData.child_id === e.id} // Assurez-vous que le bouton radio est sélectionné si c'est l'enfant sélectionné
              onChange={handleRadioChange} // Fonction de gestion du changement
            >
              {e.firstname}
            </Radio>
          ))}
        </RadioGroup>
        <h2 className="message">Message Libre</h2>
        <textarea
          className="textarea-message"
          placeholder="Votre Texte"
          value={formData.message}
          onChange={handleTextareaChange}
        />
        <div className="agreement">
          <p>En envoyant ma demande de réservation, j'accepte :</p>
          <ul>
            <li>- les conditions générales de réservations</li>
            <li>- le règlement intérieur de la structure</li>
            <li>
              - d'envoyer mes informations et dossier d'inscription à la crèche
            </li>
          </ul>
        </div>
        <div className="total-cost-container">
          <div className="total-buy">
            <small>8h de garde</small>
          </div>
          <div className="button-container flex gap-5">
            <Button
              onClick={() => setComponent("ReservationParent")}
              type="button"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts w-2"
              variant="shadow"
              color="secondary"
            >
              retour
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts w-5"
              variant="shadow"
              color="secondary"
            >
              Réserver
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

ChildSelection.propTypes = {
  setComponent: PropTypes.func.isRequired,

  selectDate: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChildSelection;
