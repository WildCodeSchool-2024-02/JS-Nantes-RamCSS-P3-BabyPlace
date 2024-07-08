import { useState } from "react";
import CityDatePicker from "../../components/components_parent/CityDatePicker";
// import FilterBar from "../../components/components_parent/FilterBar";
import Toolbar from "../../components/components_parent/Toolbar";
import NurseryCard from "../../components/components_parent/NurseryCard";

function HomeSearch() {
  // correspond à la barre de recherche pour la ville et la date
  const [city, setCity] = useState("");
  const [date, setDate] = useState(null);

  // correspond à la barre pour filtrer, trier
  const [filters, setFilters] = useState({ city: "", date: null });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <div>
        <h1>Recherche par Ville et Date</h1>
        <CityDatePicker
          city={city}
          date={date}
          onCityChange={setCity}
          onDateChange={setDate}
          handleFilterChange={handleFilterChange}
        />
        <div>
          <h1>Application de Filtres</h1>

          {/* <FilterBar
            date={date}
            setDate={setDate}
            city={city}
            setCity={setCity}
          /> */}
          <p>Ville sélectionnée: {filters.city}</p>
          <p>
            Date sélectionnée:{" "}
            {filters.date
              ? new Date(filters.date).toLocaleDateString()
              : "Aucune date sélectionnée"}
          </p>
        </div>
      </div>
      <Toolbar />
      <NurseryCard />
    </>
  );
}

export default HomeSearch;
