// import { statusInscription } from "../data";

import NavbarInscriptionPro from "../../components/components_pro-inscription/NavbarInscriptionPro";
// import StructureComponent from "../../components/components_pro-inscription/StructureComponent";
// import LocalisationComponent from "../../components/components_pro-inscription/LocalisationComponent";
// import PicturesComponent from "../../components/components_pro-inscription/PicturesComponent";
// import DescriptionComponent from "../../components/components_pro-inscription/DescriptionComponent";
// import DetailDescriptionComponent from "../../components/components_pro-inscription/DetailDescriptionComponent";
import UseConditionComponent from "../../components/components_pro-inscription/UseConditionComponent";

import "../styles_pro_pages/InscriptionPro.css";

function InscriptionPro() {
  return (
    <div>
      <NavbarInscriptionPro />
      <UseConditionComponent />
    </div>
  );
}

export default InscriptionPro;
