// import { statusInscription } from "../data";
import { useState } from "react";

import NavbarInscriptionPro from "../../components/components_pro-inscription/NavbarInscriptionPro";
import StructureComponent from "../../components/components_pro-inscription/StructureComponent";
// import LocalisationComponent from "../../components/components_pro-inscription/LocalisationComponent";
import PicturesComponent from "../../components/components_pro-inscription/PicturesComponent";
// import DescriptionComponent from "../../components/components_pro-inscription/DescriptionComponent";
// import DetailDescriptionComponent from "../../components/components_pro-inscription/DetailDescriptionComponent";
// import UseConditionComponent from "../../components/components_pro-inscription/UseConditionComponent";
// import InternalRulesComponent from "../../components/components_pro-inscription/InternalRulesComponent";
// import InformationProcessReservation from "../../components/components_pro-inscription/InformationProcessReservation";
// import AvaibleSeatsComponent from "../../components/components_pro-inscription/AvaibleSeatsComponent";
// import PriceComponent from "../../components/components_pro-inscription/PriceComponent";

import "../styles_pro_pages/InscriptionPro.css";

function InscriptionPro() {
  const [component, setComponent] = useState("StructureComponent");

  const ComponentToRender = {
    StructureComponent,
    PicturesComponent,
    // Ajoutez d'autres composants ici si nécessaire
  }[component];
  return (
    <div>
      <NavbarInscriptionPro />
      {ComponentToRender && <ComponentToRender setComponent={setComponent} />}
    </div>
  );
}

export default InscriptionPro;
