import { DatePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/select";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles_components/CityDatePicker.css";

function CityDatePicker({ setCity, date, onDateChange }) {
  const cities = useLoaderData();
  const onCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <section>
      <div className="city-date-container flex space-x-8 shadow-[0_2px_60px_-15px_rgba(0,0,0,0.3)]">
        <Select
          items={cities}
          label="Ville"
          placeholder="Selectionner une ville"
          color="secondary"
          className="max-w-xs"
          onChange={onCityChange}
        >
          {(e) => (
            <SelectItem value={e.city} key={e.city}>
              {e.city}
            </SelectItem>
          )}
        </Select>

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
  setCity: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default CityDatePicker;
