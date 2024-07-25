import { useState, useEffect } from "react";
import ReservationParent from "../../components/components_parent/ReservationParent";
import ReservationParent2 from "../../components/components_parent/ReservationParent2";

// Objet contenant les composants à rendre
const components = {
  ReservationParent: {
    component: ReservationParent,
  },
  ReservationParent2: {
    component: ReservationParent2,
  },
};

function ParentReservation() {
  const userId = localStorage.getItem("parent_id");
  const [children, setChildren] = useState("");
  const [selectDate, setSelectDate] = useState({
    arriving_date: "",
    exit_date: "",
  });

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/children/parent/${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          console.warn("Données reçues de l'API:", data);
          if (Array.isArray(data)) {
            setChildren(data); // Assurez-vous que data est un tableau
          } else {
            console.error("Données reçues ne sont pas un tableau:", data);
            setChildren([]); // Initialiser à un tableau vide si les données ne sont pas correctes
          }
        } else {
          console.error("Erreur lors de la récupération des enfants");
        }
      } catch (error) {
        console.error("Erreur:", error);
      }
    };
    fetchChildren();
  }, [userId]);
  // État initial défini sur 'DossierInscriptionParent'
  const [component, setComponent] = useState("ReservationParent");

  // Composant à rendre basé sur l'état actuel
  const ComponentToRender = components[component]?.component;

  return (
    <div>
      {ComponentToRender && (
        <ComponentToRender
          setComponent={setComponent}
          setSelectDate={setSelectDate}
          selectDate={selectDate}
          // eslint-disable-next-line react/no-children-prop
          children={children}
        />
      )}
    </div>
  );
}

export default ParentReservation;
