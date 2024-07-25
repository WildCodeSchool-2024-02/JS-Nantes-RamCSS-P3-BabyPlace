import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import CityDatePicker from "../../components/components_parent/CityDatePicker";
import Toolbar from "../../components/components_parent/Toolbar";
import NurseryCard from "../../components/components_parent/NurseryCard";
import "../styles_parents/HomeSearch.css";

function HomeSearch() {
  const nurseries = useLoaderData();

  // Correspond à la barre de recherche pour la ville et la date
  const [city, setCity] = useState("");
  const [date, setDate] = useState(null);

  const handleStoreNursery = (nursery) => {
    localStorage.setItem(
      "selectedNursery",
      JSON.stringify({
        id: nursery.id,
        name: nursery.name,
        address: nursery.address,
        city: nursery.city,
        descriptionNursery: nursery.description_nursery,
      })
    );
  };

  return (
    <div className="home-search-container">
      <div className="home-search-city-date">
        <CityDatePicker date={date} setCity={setCity} onDateChange={setDate} />
      </div>

      <div className="home-search-nursery-card pt-10 flex-col flex gap-10">
        {nurseries
          .filter((nursery) => (city ? nursery.city === city : true))
          .map((nursery) => (
            <div key={nursery.id} className="nursery-card-container">
              <NavLink
                to="/reservation"
                state={{
                  nurseryId: nursery.id,
                  nameNursery: nursery.name,
                  address: nursery.address,
                  city: nursery.city,
                  descriptionNursery: nursery.description_nursery,
                }}
                onClick={() => handleStoreNursery(nursery)}
              >
                <NurseryCard
                  nameNursery={nursery.name}
                  address={nursery.address}
                  city={nursery.city}
                  descriptionNursery={nursery.description_nursery}
                />
              </NavLink>
            </div>
          ))}

        <div className="home-search-toolbar">
          <Toolbar />
        </div>
      </div>
    </div>
  );
}

export default HomeSearch;
