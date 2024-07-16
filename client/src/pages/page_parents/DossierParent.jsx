import { useState } from "react";
import DossierEnfant from "../../components/components_parent/DossierEnfant";
import DossierInscriptionParent from "../../components/components_parent/DossierInscriptionParent";
import DossierInscription from "../../components/components_parent/DossierInscription";
import NavParentDossier from "../../components/components_parent/NavParentDossier";
import "../styles_parents/parent-dossier.css";

function DossierParent() {
  const userParent = "Alexis Guillon";

  const components = {
    "": {
      component: null,
    },
    DossierEnfant: {
      component: DossierEnfant,
      alias: "DossierEnfant",
    },
    DossierInscriptionParent: {
      component: DossierInscriptionParent,
      alias: "DossierInscriptionParent",
    },
    DossierInscription: {
      component: DossierInscription,
      alias: "DossierInscription",
    },
  };

  const [component, setComponent] = useState("");
  const ComponentToRender = components[component].component;

  return (
    <main className="main-dossier-parent">
      {component === "" ? (
        <>
          <section>
            <img src="" alt="" />
            <h1>{userParent}</h1>
            <p>
              Mettez toutes les chances de votre côté. Un profil complet est
              nécessaire pour un accueil en crèche !
            </p>
          </section>
          <section>
            <NavParentDossier setComponent={setComponent} />
          </section>
        </>
      ) : null}

      {component !== "" && (
        <section className="">
          <section className="flex-col">
            <h1>{userParent}</h1>

            <NavParentDossier setComponent={setComponent} />
          </section>
          {ComponentToRender && (
            <ComponentToRender setComponent={setComponent} />
          )}
        </section>
      )}
    </main>
  );
}

export default DossierParent;
