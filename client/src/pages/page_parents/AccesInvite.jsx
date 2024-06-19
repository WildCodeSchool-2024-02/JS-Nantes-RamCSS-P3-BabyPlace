import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles_parents/AccesInvite.css";

function AccesInvite() {
  const [flexibleHoursAndDates, setFlexibleHoursAndDates] = useState(false);

  const coche = () => {
    setFlexibleHoursAndDates(!flexibleHoursAndDates);
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
            placeholder="Date et heure de début"
          />
          <input
            className="input-parents-invite"
            type="text"
            id="name"
            placeholder="Date et heure de fin"
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
      </div>
    </div>
  );
}

export default AccesInvite;
