import { DatePicker } from "@nextui-org/date-picker";
import { Input } from "@nextui-org/input";
import PropTypes from "prop-types";
import "../styles_components/CityDatePicker.css";

function CityDatePicker({ city, date, onCityChange, onDateChange }) {
  return (
    <section>
      <div className="city-date-container flex space-x-8">
        <Input
          type="text"
          label="Ville"
          color="secondary"
          variant="flat"
          className="max-w-lg"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          placeholder="Entrez une ville"
        />
        <DatePicker
          value={date}
          label="Date"
          color="secondary"
          variant="flat"
          className="max-w-lg"
          onChange={onDateChange}
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
