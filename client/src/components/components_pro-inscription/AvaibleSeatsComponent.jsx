import PropTypes from "prop-types";

import { Button } from "@nextui-org/button";
import { useState, useEffect } from "react";

import "../styles_components/AvaibleSeatsComponent.css";

function AvaibleSeatsComponent({ setComponent }) {
  // * Déclaration des states

  const [countSeats, setCountSeats] = useState(0);
  const [countDisabilty, setCountDisabilty] = useState(0);
  const [countYoungBaby, setCountYoungBaby] = useState(0);

  const [checkNextButton, setCheckNextButton] = useState(false);

  // * Function used to add or remove a seat from the "Number of seats" counter
  const addSeat = () => setCountSeats(countSeats + 1);
  const removeSeat = () => setCountSeats(countSeats - 1);

  // * Function used to add or remove a seat from the "disability" counter
  useEffect(() => {
    if (countDisabilty > countSeats) {
      setCountDisabilty(countSeats);
    }
  }, [countSeats, countDisabilty]);

  const addDisabilty = () => {
    if (countDisabilty < countSeats) {
      setCountDisabilty(countDisabilty + 1);
    }
  };

  const removeDisabilty = () => setCountDisabilty(countDisabilty - 1);

  // * Function used to add or remove a seat from the "young baby" counter
  useEffect(() => {
    if (countYoungBaby > countSeats) {
      setCountYoungBaby(countSeats);
    }
  }, [countSeats, countYoungBaby]);

  const addYoungBaby = () => {
    if (countYoungBaby < countSeats) {
      setCountYoungBaby(countYoungBaby + 1);
    }
  };

  const removeYoungBaby = () => setCountYoungBaby(countYoungBaby - 1);

  useEffect(() => {
    const isFormValid = countSeats > 0;
    setCheckNextButton(isFormValid);
  }, [countSeats]);

  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 3 ----- */}
      <progress
        className="advanced-line-1"
        name="Barre de progression"
        max="100"
        value="56"
      />

      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro left-part-adaptatif-seats">
          <section className="global-seats-container">
            <h3 className="adaptatif-titles">Nombre de places ou agrements</h3>
            <p className="texts">
              Au total, de combien d'agréments disposez vous?
            </p>
            <section className="choice-avaible-seats">
              <p className="texts">
                <strong>Nombre de place(s)</strong>
              </p>
              <section className="count-avaible-seats">
                <button
                  type="button"
                  onClick={removeSeat}
                  disabled={countSeats === 0}
                  className="count-buttons-seats texts"
                >
                  <strong>-</strong>
                </button>
                <p className="texts count-number">
                  <strong>{countSeats}</strong>
                </p>
                <button
                  type="button"
                  onClick={addSeat}
                  className="texts count-buttons-seats"
                >
                  <strong>+</strong>
                </button>
              </section>
            </section>
          </section>
          <section className="global-seats-container">
            <h3 className="adaptatif-titles">Agréments</h3>
            <p className="texts">
              Disposez vous de restrictions d'agrément? Mettez le nombre{" "}
              <strong>maximum</strong> d'enfants que vous pouvez accueillir en
              fonction des conditions d'accueil
            </p>
            <section className="count-container">
              <section className="choice-avaible-seats">
                <p className="texts">
                  <strong>Enfant(s) handicapé(s)</strong>
                </p>
                <section className="count-avaible-seats">
                  <button
                    type="button"
                    onClick={removeDisabilty}
                    disabled={countDisabilty === 0}
                    className="texts count-buttons-seats"
                  >
                    <strong>-</strong>
                  </button>
                  <p className="texts count-number">
                    <strong>{countDisabilty}</strong>
                  </p>
                  <button
                    type="button"
                    onClick={addDisabilty}
                    disabled={countDisabilty === countSeats}
                    className="texts count-buttons-seats"
                  >
                    <strong>+</strong>
                  </button>
                </section>
              </section>
              <section className="choice-avaible-seats">
                <p className="texts">
                  <strong>Enfant(s) de moins de 18 mois</strong>
                </p>
                <section className="count-avaible-seats">
                  <button
                    type="button"
                    onClick={removeYoungBaby}
                    disabled={countYoungBaby === 0}
                    className="texts count-buttons-seats"
                  >
                    <strong>-</strong>
                  </button>
                  <p className="texts">
                    <strong>{countYoungBaby}</strong>
                  </p>
                  <button
                    type="button"
                    onClick={addYoungBaby}
                    disabled={countYoungBaby >= countSeats}
                    className="texts count-buttons-seats"
                  >
                    <strong>+</strong>
                  </button>
                </section>
              </section>
            </section>
          </section>

          {/* Redirection to next screen of professional registration */}
          <nav className="adaptatif-nav-buttons">
            <section className="display-buttons">
              <Button
                onClick={() => setComponent("InformationProcessReservation")}
                variant="shadow"
                className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                size="lg"
              >
                Retour
              </Button>
              {/* Redirection to next screen of professional registration */}
              <Button
                isDisabled={!checkNextButton}
                onClick={() => setComponent("PriceComponent")}
                variant="shadow"
                className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                size="lg"
              >
                Suivant
              </Button>
            </section>
          </nav>
        </section>
        {/* ----- Right part of the screen ------ */}
        <section className="right-part-container-register-pro" />
      </section>
    </section>
  );
}

// Validation des props
AvaibleSeatsComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default AvaibleSeatsComponent;
