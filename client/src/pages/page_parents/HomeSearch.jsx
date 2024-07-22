import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CityDatePicker from "../../components/components_parent/CityDatePicker";
import Toolbar from "../../components/components_parent/Toolbar";
import NurseryCard from "../../components/components_parent/NurseryCard";
import "../styles_parents/HomeSearch.css";

function HomeSearch() {
  const nurseries = useLoaderData();

  // correspond à la barre de recherche pour la ville et la date
  const [city, setCity] = useState("");
  const [date, setDate] = useState(null);

  // correspond à la barre pour filtrer, trier
  const [filters, setFilters] = useState({ city: "", date: null });
  console.warn(filters);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="home-search-container">
      <div className="home-search-city-date">
        <CityDatePicker
          city={city}
          date={date}
          onCityChange={setCity}
          onDateChange={setDate}
          handleFilterChange={handleFilterChange}
        />
      </div>

      <div className="home-search-nursery-card pt-5 flex-col flex gap-5">
        {nurseries.map((nursery) => (
          <NurseryCard
            key={nursery.id}
            nameNursery={nursery.name}
            city={nursery.city}
            descriptionNursery={nursery.description_nursery}
          />
        ))}

        <div className="home-search-toolbar">
          <Toolbar />
        </div>
      </div>
    </div>
  );
}

export default HomeSearch;
