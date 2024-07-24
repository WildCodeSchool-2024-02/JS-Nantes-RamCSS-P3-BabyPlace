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

  return (
    <div className="home-search-container">
      <div className="home-search-city-date">
        <CityDatePicker date={date} setCity={setCity} onDateChange={setDate} />
      </div>

      <div className="home-search-nursery-card pt-10 flex-col flex gap-10">
        {nurseries
          .filter((nursery) => (city ? nursery.city === city : true))
          .map((e) => (
            <NurseryCard
              key={e.id}
              nameNursery={e.name}
              address={e.address}
              city={e.city}
              descriptionNursery={e.description_nursery}
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
