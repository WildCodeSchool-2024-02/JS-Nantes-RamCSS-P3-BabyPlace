import { Button } from "@nextui-org/button";
import "../styles_parents/ReservationParent2.css";
import { Checkbox } from "@nextui-org/checkbox";

function ChildSelection() {
  return (
    <div className="child-selection">
      <h1 className="child-selection-h1">Crèche Picoti Picota</h1>
      <div className="child-selection-details">
        <h2 className="child-selection-h2">Enfant à garder</h2>
        <div className="child">
          <Checkbox>Bébé Cannan 1 (18 mois)</Checkbox>
        </div>
        <div className="child">
          <Checkbox>Bébé Cannan 2 (2 mois)</Checkbox>
        </div>
        <h2 className="message">Message Libre</h2>
        <textarea className="textarea-message" placeholder="Votre Texte" />
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
              type="button"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
              variant="shadow"
              color="secondary"
            >
              Réserver
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildSelection;
