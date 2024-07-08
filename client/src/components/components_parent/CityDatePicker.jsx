import { DatePicker } from "@nextui-org/date-picker";
import PropTypes from "prop-types";
// import "./CityDatePicker.css";

function CityDatePicker({ city, date, onCityChange, onDateChange }) {
  return (
    <section>
      <div>
        <label htmlFor="city">
          Ville:
          <input
            type="text"
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            placeholder="Entrez une ville"
          />
        </label>
        <label htmlFor="date">
          Date:
          <DatePicker
            value={date}
            onChange={onDateChange}
            placeholder="Choisissez une date"
          />
        </label>
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
