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
        <button type="button" className="heart-button" onClick={toggleHeart}>
          <img
            src={
              isFilled
                ? "/src/assets/images/icônes/Icone-coeur-vide.svg"
                : "/src/assets/images/icônes/Icone-coeur-favoris.svg"
            }
            alt="coeur favoris"
          />
        </button>
        <p> Image de la crèche </p>
        <p> Nom de la crèche {nameNursery} </p>
        <p> Une partie de la description de la crèche {descriptionNursery} </p>
        <p> Ville {city} </p>
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
