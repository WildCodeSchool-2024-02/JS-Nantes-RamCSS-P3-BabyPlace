// import { statusInscription } from "../data";
import { useState } from "react";

import NavbarInscriptionPro from "../../components/components_pro-inscription/NavbarInscriptionPro";
import StructureComponent from "../../components/components_pro-inscription/StructureComponent";
import LocalisationComponent from "../../components/components_pro-inscription/LocalisationComponent";
import PicturesComponent from "../../components/components_pro-inscription/PicturesComponent";
import DescriptionComponent from "../../components/components_pro-inscription/DescriptionComponent";
import DetailDescriptionComponent from "../../components/components_pro-inscription/DetailDescriptionComponent";
import UseConditionComponent from "../../components/components_pro-inscription/UseConditionComponent";
import InternalRulesComponent from "../../components/components_pro-inscription/InternalRulesComponent";
import InformationProcessReservation from "../../components/components_pro-inscription/InformationProcessReservation";
import AvaibleSeatsComponent from "../../components/components_pro-inscription/AvaibleSeatsComponent";
import PriceComponent from "../../components/components_pro-inscription/PriceComponent";

import "../styles_pro_pages/InscriptionPro.css";

function InscriptionPro() {
  const [component, setComponent] = useState("StructureComponent");

  const components = {
    StructureComponent: {
      component: StructureComponent,
      alias: "Structure d'accueil",
    },
    LocalisationComponent: {
      component: LocalisationComponent,
      alias: "Localisation",
    },
    PicturesComponent: {
      component: PicturesComponent,
      alias: "Photos",
    },
    DescriptionComponent: {
      component: DescriptionComponent,
      alias: "Présentation",
    },
    DetailDescriptionComponent: {
      component: DetailDescriptionComponent,
      alias: "Présentation",
    },
    UseConditionComponent: {
      component: UseConditionComponent,
      alias: "Conditions d'utilisation",
    },
    InternalRulesComponent: {
      component: InternalRulesComponent,
      alias: "Règlement d'intérieur",
    },
    InformationProcessReservation: {
      component: InformationProcessReservation,
      alias: "Paramètres de réservation",
    },
    AvaibleSeatsComponent: {
      component: AvaibleSeatsComponent,
      alias: "Nombre de places",
    },
    PriceComponent: {
      component: PriceComponent,
      alias: "Tarifs",
    },
  };

  const ComponentToRender = components[component].component;
  const pageTitle = components[component].alias;

  return (
    <div>
      <NavbarInscriptionPro pageTitle={pageTitle} />
      {ComponentToRender && <ComponentToRender setComponent={setComponent} />}
    </div>
  );
}

export default InscriptionPro;
