import PropTypes from "prop-types";

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
        <label htmlFor="city">Ville:</label>
        <input
          type="text"
          id="city"
          placeholder="Entrez une ville"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      <div className="filter-item">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
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
