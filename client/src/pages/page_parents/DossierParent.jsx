import { useState } from "react";
import DossierEnfant from "../../components/components_parent/DossierEnfant";
import DossierInscriptionParent from "../../components/components_parent/DossierInscriptionParent";
import DossierInscription from "../../components/components_parent/DossierInscription";
import NavParentDossier from "../../components/components_parent/NavParentDossier";
import "../styles_parents/parent-dossier.css";

function DossierParent() {
  const userParent = "Alexis Guillon";
  const userParentPicture =
    "../src/assets/images/illustration/Team-memeber-01 1.png";

  const components = {
    "": {
      component: null,
    },
    DossierEnfant: {
      component: DossierEnfant,
    },
    DossierInscriptionParent: {
      component: DossierInscriptionParent,
    },
    DossierInscription: {
      component: DossierInscription,
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
          <section className="text-white flex flex-col items-center ">
            <img
              src={userParentPicture}
              className="w-[300px] h-[300px] p-[50px] rounded-full"
              alt="profile"
            />
            <h1 className="text-center text-xl ">{userParent}</h1>
            <section className="p-[20px] text-center">
              <p className=" font-bold ">
                Mettez toutes les chances de votre côté.
              </p>
              <p className=" text-center">
                Un profil complet est nécessaire pour un accueil en crèche !
              </p>
            </section>
          </section>
          <section className="flex justify-center ">
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
              <h1 className="text-xl font-bold">{userParent}</h1>
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
