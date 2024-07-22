import { useState } from "react";
import PropTypes from "prop-types";
import "../styles_components/NurseryCard.css";

function NurseryCard({ nameNursery, city, descriptionNursery }) {
  const [isFilled, setIsFilled] = useState(false);

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div className="nursery-card-container texts">
      <section className="nursery-card">
        <img
          className="nursery-photo"
          src="src/assets/images/photos/Crèche 1.jpg"
          alt="creche"
        />
        <section className="flex">
          <section>
            <p> {nameNursery} </p>
            <p> {descriptionNursery} </p>
            <p> {city} </p>
          </section>
          <button type="button" className="heart-button" onClick={toggleHeart}>
            <img
              src={
                isFilled
                  ? "/src/assets/images/icônes/Icone-coeur-favoris.svg"
                  : "/src/assets/images/icônes/Icone-coeur-vide.svg"
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
  nameNursery: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  descriptionNursery: PropTypes.string.isRequired,
};

export default NurseryCard;
