import PropTypes from "prop-types";
import "../styles_components/FilterBar.css";

function FilterBar({ city, setCity, date, setDate, handleFilterChange }) {
  const handleCityChange = (e) => {
    setCity(e.target.value);
    handleFilterChange({ city: e.target.value, date });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    handleFilterChange({ city, date: e.target.value });
  };

  return (
    <div className="filter-bar">
      <div className="filter-item">
        <input
          type="text"
          placeholder="Filtrer"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      <div className="filter-item">
        <input
          type="text"
          value={date}
          placeholder="Trier"
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
}

FilterBar.propTypes = {
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default FilterBar;
