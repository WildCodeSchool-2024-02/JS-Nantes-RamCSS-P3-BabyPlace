import { useState } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@nextui-org/checkbox";
import { DatePicker } from "@nextui-org/date-picker";
import { Button } from "@nextui-org/button";
import { NavLink } from "react-router-dom";
import "../styles_components/ReservationParent.css";

function ReservationParent({ setComponent, setSelectDate }) {
  const creche = JSON.parse(localStorage.getItem("selectedNursery"));

  // État pour les dates sélectionnées
  const [dates, setDates] = useState({
    arriving_date: null,
    exit_date: null,
  });

  // Fonction pour gérer les changements dans les DatePicker
  const handleDateChange = (key) => (date) => {
    setDates((prevDates) => {
      const newDates = { ...prevDates, [key]: date };
      // Passer les dates sélectionnées au parent
      setSelectDate(newDates);
      return newDates;
    });
  };

  return (
    <div className="reservation-request">
      <header className="header-reservation-parent">
        <NavLink to="/recherche">
          <Button
            className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
            variant="shadow"
            color="secondary"
            type="submit"
          >
            {" "}
            &#x3008;
          </Button>
        </NavLink>
        <h1 className="reservation-h1">{creche.name}</h1>
      </header>
      <section className="card-nursery">
        <img
          src="./src/assets/images/illustration/avatar_lorem.jpg"
          alt="Enfants jouant"
          className="creche-image"
        />
        <div className="reservation-details">
          <div className="bloc-one">
            <h2>Demande de réservation Crèche {creche.name}</h2>
            <img
              src="./src/assets/images/icônes/Pricing.png"
              alt="Pricing Icon"
            />
          </div>
          <div className="flex flex-col items-center">
            <section className="flex flex-col gap-[10px] mb-5">
              <DatePicker
                color="secondary"
                name="arriving_date"
                label="du"
                className="max-w-[284px] w-[200px]"
                value={dates.arriving_date}
                onChange={handleDateChange("arriving_date")} // Gérer le changement de la date d'arrivée
              />
              <DatePicker
                color="secondary"
                name="exit_date"
                label="jusqu'au"
                className="max-w-[284px] w-[200px]"
                value={dates.exit_date}
                onChange={handleDateChange("exit_date")} // Gérer le changement de la date de sortie
              />
            </section>
            <h3 className="more-information2">Horaires : 9h-16h</h3>
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
              <h5 className="time">8h de garde*</h5>
            </div>

            <Button
              onClick={() => setComponent("ReservationParent2")}
              type="button"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
              variant="shadow"
              color="secondary"
            >
              Suivant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

ReservationParent.propTypes = {
  setComponent: PropTypes.func.isRequired,
  setSelectDate: PropTypes.func.isRequired, // Assurez-vous que `setSelectDate` est passé en tant que prop
};

export default ReservationParent;
