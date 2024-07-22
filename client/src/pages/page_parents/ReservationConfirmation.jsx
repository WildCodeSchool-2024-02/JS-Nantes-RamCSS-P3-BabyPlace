import "../styles_parents/ReservationConfirmation.css";
import { Button } from "@nextui-org/button";

function ReservationConfirmation() {
  return (
    <div className="reservation-confirmation">
      <header className="header-reservation-confirmation">
        <img
          className="logo-babyplace"
          src="./src/assets/images/logos/logo_complet.png"
          alt="logo"
        />
      </header>
      <article className="article-reservation-confirmation">
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

        <div className="flex justify-end">
          <Button
            // Rajouter redirection vers page Menu || Add redirection to Menu page
            // to="/page_parent/.....MENU...."
            className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
            variant="shadow"
            color="primary"
            type="submit"
          >
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReservationConfirmation;
