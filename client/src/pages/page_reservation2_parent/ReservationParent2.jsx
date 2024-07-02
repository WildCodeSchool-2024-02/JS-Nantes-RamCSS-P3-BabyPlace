import "../styles_page_reservation2_parent/ReservationParent2.css";

function ChildSelection() {
  return (
    <div className="child-selection">
      <header>
        <h1>Crèche Picoti Picota</h1>
      </header>
      <div className="child-selection-details">
        <h2>Enfant à garder</h2>
        <div className="child">
          <label>
            <input type="radio" name="child" /> Bébé Cannan 1 (18 mois)
          </label>
        </div>
        <div className="child">
          <label>
            <input type="radio" name="child" /> Bébé Cannan 2 (2 mois)
          </label>
        </div>
        <textarea placeholder="Message Libre" />
        <div className="agreement">
          <p>En envoyant ma demande de réservation, j'accepte :</p>
          <ul>
            <li>les conditions générales de réservations</li>
            <li>le règlement intérieur de la structure</li>
            <li>
              d'envoyer mes informations et dossier d'inscription à la crèche
            </li>
          </ul>
        </div>
        <div className="total-cost">
          <p>75€*</p>
          <small>* 8 h de garde*</small>
        </div>
        <button type="button">Réserver</button>
      </div>
    </div>
  );
}

export default ChildSelection;
