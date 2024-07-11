import PropTypes from "prop-types";
import "../styles_components/NurseryCard.css";

function NurseryCard({ NameNursery, City, DescriptionNursery }) {
  return (
    <div className="nursery-card-container">
      <section className="nursery-card">
        <img src="" alt="" />
        <p> Image de la crèche </p>
        <p> Nom de la crèche {NameNursery} </p>
        <p> Une partie de la description de la crèche {DescriptionNursery} </p>
        <p> Ville {City} </p>
      </section>
    </div>
  );
}

NurseryCard.propTypes = {
  NameNursery: PropTypes.string.isRequired,
  City: PropTypes.string.isRequired,
  DescriptionNursery: PropTypes.string.isRequired,
};

export default NurseryCard;
