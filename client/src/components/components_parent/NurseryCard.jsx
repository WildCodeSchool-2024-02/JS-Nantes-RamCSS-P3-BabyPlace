import { useState } from "react";
import PropTypes from "prop-types";
import "../styles_components/NurseryCard.css";

function NurseryCard({ nameNursery, address, city, descriptionNursery }) {
  const [isFilled, setIsFilled] = useState(false);

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div className="nursery-card-container texts">
      <section className="nursery-card shadow-md">
        <img
          className="nursery-photo"
          src="src/assets/images/photos/creche-1.jpg"
          alt="creche"
        />
        <section className="flex">
          <section>
            <p> {nameNursery} </p>
            <p> {address} </p>
            <p> {city} </p>
            <p> {descriptionNursery} </p>
          </section>
          <button type="button" className="heart-button" onClick={toggleHeart}>
            <img
              src={
                isFilled
                  ? "/src/assets/images/icones/icone-coeur-favoris.svg"
                  : "/src/assets/images/icones/icone-coeur-vide.svg"
              }
              alt="coeur favoris"
            />
          </button>
        </section>
      </section>
    </div>
  );
}

NurseryCard.propTypes = {
  address: PropTypes.string.isRequired,
  nameNursery: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  descriptionNursery: PropTypes.string.isRequired,
};

export default NurseryCard;
