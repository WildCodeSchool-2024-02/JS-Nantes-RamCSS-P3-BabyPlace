import "../styles_parents/ReservationParent.css";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/recherche">
          <Button
            // Rajouter redirection vers page REcherche de creche || Add redirection to Recherche de creche page
            className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
            variant="shadow"
            color="primary"
            type="submit"
          >
            {" "}
            &#x3008;
          </Button>
        </NavLink>
        <h1 className="reservation-h1">Crèche Picoti Picota</h1>
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
            <h3 className="more-information1">Date : lundi 14 septembre</h3>
            <img
              className="more-information-picture1"
              src="./src/assets/images/icônes/params.png"
              alt="Param "
            />
            <h3 className="more-information2">Horaires : 9h-16h</h3>
            <img
              className="more-information-picture2"
              src="./src/assets/images/icônes/params.png"
              alt="Param "
            />
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
            <p className="indemnite">Indemnité kilométrique (0,50€)</p>
            <p className="indemnite">
              Indemnité d’entretien (3,5€)
              <Checkbox color="secondary" />
            </p>
            <p className="indemnite">
              Indemnité de repas (7€)
              <Checkbox color="secondary" />
            </p>
          </div>
          <div className="total-cost">
            <div className="cost-time-container">
              <h5 className="cost">75€*</h5>
              <h5 className="time">8h de garde*</h5>
            </div>
            <NavLink to="/reservationdeux">
              <Button
                type="button"
                className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                variant="shadow"
                color="primary"
              >
                Suivant
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
      <small className="bonus-information">
        * En complétant mon profil, je peux obtenir une tarification
        personnalisée en fonction de mes revenus
      </small>
    </div>
  );
}

export default ReservationRequest;
