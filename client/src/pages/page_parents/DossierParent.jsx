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

  const selectDossier = () => {
    setComponent("");
  };

  return (
    <main className="main-dossier-parent">
      {component === "" ? (
        <>
          <section className="text-white flex flex-col items-center">
            <img
              src="../src/assets/images/illustration/Team-memeber-01 1.png"
              className="w-[100px] h-[100px] rounded-full"
              alt=""
            />
            <h1 className="text-center ">{userParent}</h1>
            <p>
              Mettez toutes les chances de votre côté. Un profil complet est
              nécessaire pour un accueil en crèche !
            </p>
          </section>
          <section className="">
            <NavParentDossier
              component={component}
              setComponent={setComponent}
            />
          </section>
        </>
      ) : null}

      {component !== "" && (
        <section className="">
          <section className="flex-col">
            <button
              type="button"
              onClick={selectDossier}
              className="text-center text-white btn-style w-[100%]"
            >
              <h1>{userParent}</h1>
            </button>

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
