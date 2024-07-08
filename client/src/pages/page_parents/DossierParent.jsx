import { useState } from "react";
import DossierEnfant from "../../components/components_parent/DossierEnfant";
import DossierInscriptionParent from "../../components/components_parent/DossierInscriptionParent";
import DossierInscription from "../../components/components_parent/DossierInscription";
import NavParentDossier from "../../components/components_parent/NavParentDossier";

function DossierParent() {
  const components = {
    StructureComponent: {
      component: DossierEnfant,
      alias: "DossierEnfant",
    },
    LocalisationComponent: {
      component: DossierInscriptionParent,
      alias: "DossierInscriptionParent",
    },
    PicturesComponent: {
      component: DossierInscription,
      alias: "DossierInscription",
    },
  };
  
  const [component, setComponent] = useState("StructureComponent");
  const ComponentToRender = components[component].component;
  
  return (
    <main>
      <NavParentDossier setComponent={setComponent} />
      {ComponentToRender && <ComponentToRender setComponent={setComponent} />}
    </main>
  );
}

export default DossierParent;
