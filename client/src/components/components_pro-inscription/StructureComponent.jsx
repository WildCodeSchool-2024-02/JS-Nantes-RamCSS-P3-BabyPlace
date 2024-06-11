import { NavLink } from "react-router-dom";

import "../styles_components/StructureComponent.css";

function StructureComponent() {
  return (
    <div>
      {/* ----- Visual indicating the progress of registration => level 0 ----- */}
      <div className="advanced-line" />

      {/* ----- full screen ----- */}
      <div className="global-container-structure">
        {/* ----- Left part of the screen ------ */}
        <div className="left-part-container-structure">
          <h2 className="titles">Quel type d'accueil proposez vous?</h2>
          <input
            id="nurserytype"
            name="type"
            type="checkbox"
            className="input-checkbox"
          />
          <label htmlFor="nurserytype" className="label-checkbox texts">
            Crèche
          </label>
          <h2 className="titles">Maintenant, précisons les choses...</h2>

          {/* * Types of Nurseries */}
          <div className="checkboxgroup" aria-label="Type of nursery">
            {/* ---checkbox 1 => "Crèche parentale" */}
            <input
              id="parentalnursery"
              name="type"
              type="checkbox"
              className="input-checkbox"
            />
            <label htmlFor="parentalnursery" className="label-checkbox texts">
              Crèche parentale
            </label>
            {/* ---checkbox 2 => "Micro-Crèche" */}
            <input
              id="micronursery"
              name="type"
              type="checkbox"
              className="input-checkbox"
            />
            <label htmlFor="micronursery" className="label-checkbox texts">
              Micro-Crèche
            </label>
            {/* ---checkbox 3 => "Crèche d'entreprise" */}
            <input
              id="companynursery"
              name="type"
              type="checkbox"
              className="input-checkbox"
            />
            <label htmlFor="companynursery" className="label-checkbox texts">
              Crèche d'entreprise
            </label>
            {/* ---checkbox 4 => "Halte garderie" */}
            <input
              id="daycare"
              name="type"
              type="checkbox"
              className="input-checkbox"
            />
            <label htmlFor="daycare" className="label-checkbox texts">
              Halte garderie
            </label>
            {/* ---checkbox 5 => "Crèche collective" */}
            <input
              id="collectivenursery"
              name="type"
              type="checkbox"
              className="input-checkbox"
            />
            <label htmlFor="collectivenursery" className="label-checkbox texts">
              Crèche collective
            </label>
            {/* ---checkbox 6 => "Crèche écologique" */}
            <input
              id="ecologicalnursery"
              name="type"
              type="checkbox"
              className="input-checkbox"
            />
            <label htmlFor="ecologicalnursery" className="label-checkbox texts">
              Crèche écologique
            </label>
            {/* ---checkbox 7 => "Multi-Accueil" */}
            <input
              id="multireceptionnursery"
              name="type"
              type="checkbox"
              className="input-checkbox"
            />
            <label
              htmlFor="multireceptionnursery"
              className="label-checkbox texts"
            >
              Multi-Accueil
            </label>
            {/* ---checkbox 8 => "Crèche municipale" */}
            <input
              id="municipalnursery"
              name="type"
              type="checkbox"
              className="input-checkbox"
            />
            <label htmlFor="municipalnursery" className="label-checkbox texts">
              Crèche municipale
            </label>
            {/* ---checkbox 9 => "Crèche associative" */}
            <input
              id="associatifnursery"
              name="type"
              type="checkbox"
              className="input-checkbox"
            />
            <label htmlFor="associatifnursery" className="label-checkbox texts">
              Crèche associative
            </label>
          </div>

          {/* Name & Phone number */}
          <h2 className="titles">Complétez et vérifiez vos informations</h2>
          <div className="global-input-container">
            <div>
              <div className="input-container">
                <label htmlFor="name" className="texts text-input-label">
                  Nom :
                </label>
                <input
                  type="text"
                  placeholder="Ex : La crèche des petits lutins"
                  className="texts input-text"
                />
              </div>
              <p className="texts information-name">
                Ce nom sera celui qui s'affichera en titre de votre annonce.
              </p>
            </div>
            <div className="input-container">
              <label htmlFor="name" className="texts text-input-label">
                N° de téléphone :
              </label>
              <input
                type="text"
                placeholder="Ex : 08.00.00.00.00"
                className="texts input-text"
              />
            </div>
          </div>

          {/* Redirection to screen 2 of profesional registration */}
          <NavLink to="/" className="navlink-screen1 texts">
            <p>Suivant</p>
            <img
              src="../src/assets/images/illustration/arrow_right.svg"
              alt="Arrow"
            />
          </NavLink>
        </div>

        {/* ----- Right part of the screen ------ */}
        <div className="right-part-container-structure">
          <div className="descritif-background">
            <img
              src="../src/assets/images/illustration/img_structure_ecran1.png"
              alt="Avatar"
              className="image-descriptif-structure"
            />
            <h2 className="titles">Choississez votre catégorie</h2>
            <p className="text-descriptif-structure texts">
              En sélectionnant les catégories adéquates, vous aidez les parents
              à savoir à quoi s'attendre concernant l'accueil de leur enfant au
              sein de votre structure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StructureComponent;
