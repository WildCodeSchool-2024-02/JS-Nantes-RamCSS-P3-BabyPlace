import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Button, Input, DatePicker } from "@nextui-org/react";
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
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 ">
              <Input
                type="text"
                label="Adresse"
                color="secondary"
                variant="flat"
                className="max-w-lg"
              />
              <DatePicker
                label="Date d'entrée"
                color="secondary"
                className="max-w-lg"
              />
              <DatePicker
                label="Date de sortie"
                color="secondary"
                className="max-w-lg"
              />
            </div>
          </div>
          <div className="accesinvite-checkbox-container">
            <label htmlFor="flexibilité-dates-horaires">
              <input className="mr-2" type="checkbox" onChange={coche} />
              Mes dates ou mes horaires sont flexibles
            </label>
          </div>
          <NavLink to="/recherche" className="w-80">
            <Button
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts w-80"
              variant="shadow"
              size="lg"
              color="primary"
            >
              Rechercher
            </Button>
          </NavLink>
        </div>
        <div className="nav-bottom">
          <NavLink to="/" className="btn-nav-bottom texts">
            accueil
          </NavLink>
          <NavLink to="/connexion" className="btn-nav-bottom texts">
            s'inscrire
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AccesInvite;
