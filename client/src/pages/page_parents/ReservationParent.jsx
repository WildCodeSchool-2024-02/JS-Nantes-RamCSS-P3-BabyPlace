import "../styles_parents/ReservationParent.css";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";

function ReservationRequest() {
  return (
    <div className="reservation-request">
      <header>
        <Button
          // Rajouter redirection vers page REcherche de creche || Add redirection to Recherche de creche page
          // to="/page_parent/.....Recherche de creche...."
          className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
          variant="shadow"
          color="primary"
          type="submit"
        >
          {" "}
          &#x3008;
        </Button>
        <h1>Crèche Picoti Picota</h1>
      </header>
      <section className="card-nuresery">
        <img
          src="./src/assets/images/illustration/avatar_lorem.jpg"
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
            <Checkbox color="secondary">7</Checkbox>
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
      </section>
    </div>
  );
}

export default ReservationRequest;
