import { DatePicker } from "@nextui-org/date-picker";
import PropTypes from "prop-types";
import "../styles_components/CityDatePicker.css";

function CityDatePicker({ city, date, onCityChange, onDateChange }) {
  return (
    <section>
      <div className="city-date-container texts">
        <label htmlFor="city"> Ville: </label>
        <input
          type="text"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          placeholder="Entrez une ville"
        />
        <label htmlFor="date"> Date: </label>
        <DatePicker
          value={date}
          color="secondary"
          onChange={onDateChange}
          placeholder="Choisissez une date"
        />
      </div>
    </section>
  );
}

CityDatePicker.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default CityDatePicker;
