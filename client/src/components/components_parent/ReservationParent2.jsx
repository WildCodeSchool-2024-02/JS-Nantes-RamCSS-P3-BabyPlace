import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import PropTypes from "prop-types";
import "../styles_components/ReservationParent2.css";

function ChildSelection({ children }) {
  // Assurez-vous que 'children' est bien un tableau et qu'il contient des éléments

  // Si vous voulez afficher tous les enfants :
  const [formData, setFormData] = useState({
    message: "",
    reservation_date: "2024-07-12",
    reservation_status: "1",
    status_date: "2024-07-25",
    arriving_date: "2024-08-11",
    exit_date: "2024-08-15",
    price: "55",
    nursery_id: 1,
    child_id: null, // Utilisez `null` pour représenter l'absence de sélection
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      child_id: checked ? name : null, // Met à jour l'ID de l'enfant sélectionné ou le réinitialise
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
        {children.map((e) => (
          <div className="child" key={e.id}>
            {" "}
            {/* Ajout de la clé pour chaque enfant */}
            <Checkbox
              name={e.id}
              isChecked={formData.child_id === e.id} // Assure que la case est cochée si c'est l'enfant sélectionné
              onChange={handleCheckboxChange}
            >
              {e.firstname}
            </Checkbox>
          </div>
        ))}
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
          <div className="button-container">
            <Button
              type="submit"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
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
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChildSelection;
