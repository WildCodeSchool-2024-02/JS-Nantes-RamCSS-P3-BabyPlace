import "../styles_page_reservation_confirmation/ReservationConfirmation.css";

function ReservationConfirmation() {
  return (
    <div className="reservation-confirmation">
      <header>
        <img
          className="logo-babyplace"
          src="./src/assets/images/logos/logo_complet.png"
          alt="logo"
        />
      </header>
      <article>
        <div className="images-row">
          <img
            className="client-img"
            src="./src/assets/images/illustration/team-img-2 1.png"
            alt="client"
          />
          <img
            className="nursery-img"
            src="./src/assets/images/illustration/Team-memeber-01 1.png"
            alt="nursery"
          />
        </div>
        <div className="point-interrogation">
          <div className="question-mark">?</div>
        </div>
      </article>
      <div className="confirmation-details">
        <h2>Réservation</h2>
        <p>Votre demande a bien été envoyée à la crèche Picoti Picota</p>
        <p>Lundi 14 septembre de 9h à 17h</p>
        <div className="status">
          <p>Statut de votre demande :</p>
          <div className="status-badge">
            <p className="pending">En attente de confirmation</p>
          </div>
        </div>
        <p className="info">
          N'oubliez pas de compléter votre profil pour avoir plus de chance que
          votre demande soit acceptée
        </p>
        <text>
          Suivant
          <button type="button" className="round-button">
            &gt;
          </button>
        </text>
      </div>
    </div>
  );
}

export default ReservationConfirmation;
