import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles_parents/AccesInvite.css";

function AccesInvite() {
  const [flexibleHoursAndDates, setFlexibleHoursAndDates] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  console.warn(startDate);
  console.warn(endDate);

  const coche = () => {
    setFlexibleHoursAndDates(!flexibleHoursAndDates);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div>
      <div className="form-acces-invite">
        <img
          src="./src/assets/images/logos/logo_complet.png"
          className="logo-invite"
          alt="logo babyplace"
        />
        <h2 className="titles titles-acces-invite">
          {" "}
          Garde d'enfant à la demande{" "}
        </h2>
        <div className="form-invite">
          <input
            className="input-parents-invite"
            type="text"
            id="name"
            placeholder="Adresse"
          />
          <input
            className="input-parents-invite"
            type="text"
            id="name"
            placeholder="Occasionnel"
          />
          <input
            className="input-parents-invite"
            type="text"
            id="name"
            placeholder="Date de début"
            onSelect={handleStartDateChange}
          />
          <input
            className="input-parents-invite"
            type="text"
            id="name"
            placeholder="Date de fin"
            onSelect={handleEndDateChange}
          />
          <div className="accesinvite-checkbox-container">
            <label htmlFor="flexibilité-dates-horaires">
              <input type="checkbox" onChange={coche} />
              Mes dates ou mes horaires sont flexibles
            </label>
          </div>
          <NavLink
            to="/recherche"
            className="link-connexion-parent-btn btn-global texts"
          >
            Rechercher
          </NavLink>
        </div>
        <div className="nav-bottom">
          <NavLink to="/" className="btn-nav-bottom texts">
            accueil
          </NavLink>
          <NavLink to="/inscription" className="btn-nav-bottom texts">
            s'inscrire
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AccesInvite;
