import "../styles_parents/ReservationParent.css";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
// import React, { useState } from 'react';

function ReservationRequest() {
  // État pour gérer le statut du like
  // const [liked, setLiked] = useState(false);

  // // Fonction pour gérer le clic sur le bouton
  // const handleLike = () => {
  //   setLiked(!liked);
  // };

  return (
    <div className="reservation-request">
      <header className="header-reservation-parent">
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
      <section className="card-nursery">
        <img
          src="./src/assets/images/illustration/avatar_lorem.jpg"
          alt="Enfants jouant"
          className="creche-image"
        />
        {/* <button
            onClick={handleLike}
            className={`like-button ${liked ? 'liked' : ''}`}
            variant="shadow"
            color={liked ? "success" : "primary"}
          >
            {liked ? 'Liked' : 'Like'}
          </button> */}
        <div className="reservation-details">
          <div className="bloc-one">
            <h2>Demande de réservation Crèche Picoti Picota</h2>
            <img
              src="./src/assets/images/icônes/Pricing.png"
              alt="Pricing Icon"
            />
          </div>

          <div className="more-info-container">
            <p>
              <h3 className="more-information">Date : lundi 14 septembre</h3>
              <img
                className="more-information-picture"
                src="./src/assets/images/icônes/params.png"
                alt="Param "
              />
            </p>
            <p>
              <h3 className="more-information">Horaires : 9h-16h</h3>
              <img
                className="more-information-picture"
                src="./src/assets/images/icônes/params.png"
                alt="Param "
              />
            </p>
          </div>
          <div className="services">
            <p>
              <span>🥗</span> Repas bio
            </p>
            <p>
              <span>♿</span> Accueil Handicap
            </p>
            <p>
              <span>⏰</span> Horaires tardif
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
            <p>8h de garde*</p>
          </div>
        </div>
        <Button
          className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
          variant="shadow"
          color="primary"
          type="submit"
        >
          {" "}
          Suivant;
        </Button>
      </section>
      <small>
        * En complétant mon profil, je peux obtenir une tarification
        personnalisée en fonction de mes revenus
      </small>
    </div>
  );
}

export default ReservationRequest;
