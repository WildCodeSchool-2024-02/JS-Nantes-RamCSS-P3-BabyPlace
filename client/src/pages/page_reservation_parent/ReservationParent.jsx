import "../styles_page_reservation_parent/ReservationParent.css";

function ReservationRequest() {
  return (
    <div className="reservation-request">
      <header>
        <h1>Crèche Picoti Picota</h1>
      </header>
      <img
        src="path/to/your/image.jpg"
        alt="Enfants jouant"
        className="creche-image"
      />
      <div className="reservation-details">
        <h2>Demande de réservation</h2>
        <p>
          <strong>Date :</strong> lundi 14 septembre
        </p>
        <p>
          <strong>Horaires :</strong> 9h-16h
        </p>
        <div className="services">
          <p>
            <span>🥗</span> Repas bio
          </p>
          <p>
            <span>♿</span> Accueil Handicap
          </p>
          <p>
            <span>⏰</span> Horaires tarifés
          </p>
        </div>
        <div className="indemnities">
          <p>Indemnité kilométrique (0,50€)</p>
          <p>Indemnité d’entretien (3,5€)</p>
          <p>Indemnité de repas (7€)</p>
          <label>
            <input type="checkbox" /> 7€
          </label>
        </div>
        <div className="total-cost">
          <p>75€*</p>
          <small>
            * En complétant mon profil, je peux obtenir une tarification
            personnalisée en fonction de mes revenus
          </small>
        </div>
        <button type="button">Suivant</button>
      </div>
    </div>
  );
}
export default ReservationRequest;
