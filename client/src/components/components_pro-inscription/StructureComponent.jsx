import { NavLink } from "react-router-dom";

import "../styles_components/StructureComponent.css";

function StructureComponent() {
  return (
    <section>
      {/* ----- Visual indicating the progress of registration => level 0 ----- */}
      <progress
        className="advanced-line-0"
        name="Barre de progression"
        max="100"
        value="0"
      />

      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro">
          <h2 className="titles">Quel type d'accueil proposez vous?</h2>
          <input
            id="nursery-type"
            name="type"
            type="checkbox"
            className="input-checkbox-pro"
          />
          <label htmlFor="nursery-type" className="label-checkbox-pro texts">
            Crèche
          </label>
          <h2 className="titles">Maintenant, précisons les choses...</h2>

          {/* * Types of Nurseries */}
          <section className="checkboxgroup" aria-label="Type of nursery">
            {/* ---checkbox 1 => "Crèche parentale" */}
            <input
              id="parental-nursery"
              name="type"
              type="checkbox"
              className="input-checkbox-pro"
            />
            <label
              htmlFor="parental-nursery"
              className="label-checkbox-pro texts"
            >
              Crèche parentale
            </label>
            {/* ---checkbox 2 => "Micro-Crèche" */}
            <input
              id="micro-nursery"
              name="type"
              type="checkbox"
              className="input-checkbox-pro"
            />
            <label htmlFor="micro-nursery" className="label-checkbox-pro texts">
              Micro-Crèche
            </label>
            {/* ---checkbox 3 => "Crèche d'entreprise" */}
            <input
              id="company-nursery"
              name="type"
              type="checkbox"
              className="input-checkbox-pro"
            />
            <label
              htmlFor="company-nursery"
              className="label-checkbox-pro texts"
            >
              Crèche d'entreprise
            </label>
            {/* ---checkbox 4 => "Halte garderie" */}
            <input
              id="daycare"
              name="type"
              type="checkbox"
              className="input-checkbox-pro"
            />
            <label htmlFor="daycare" className="label-checkbox-pro texts">
              Halte garderie
            </label>
            {/* ---checkbox 5 => "Crèche collective" */}
            <input
              id="collective-nursery"
              name="type"
              type="checkbox"
              className="input-checkbox-pro"
            />
            <label
              htmlFor="collective-nursery"
              className="label-checkbox-pro texts"
            >
              Crèche collective
            </label>
            {/* ---checkbox 6 => "Crèche écologique" */}
            <input
              id="ecological-nursery"
              name="type"
              type="checkbox"
              className="input-checkbox-pro"
            />
            <label
              htmlFor="ecological-nursery"
              className="label-checkbox-pro texts"
            >
              Crèche écologique
            </label>
            {/* ---checkbox 7 => "Multi-Accueil" */}
            <input
              id="multireception-nursery"
              name="type"
              type="checkbox"
              className="input-checkbox-pro"
            />
            <label
              htmlFor="multireception-nursery"
              className="label-checkbox-pro texts"
            >
              Multi-Accueil
            </label>
            {/* ---checkbox 8 => "Crèche municipale" */}
            <input
              id="municipal-nursery"
              name="type"
              type="checkbox"
              className="input-checkbox-pro"
            />
            <label
              htmlFor="municipal-nursery"
              className="label-checkbox-pro texts"
            >
              Crèche municipale
            </label>
            {/* ---checkbox 9 => "Crèche associative" */}
            <input
              id="associatif-nursery"
              name="type"
              type="checkbox"
              className="input-checkbox-pro"
            />
            <label
              htmlFor="associatif-nursery"
              className="label-checkbox-pro texts"
            >
              Crèche associative
            </label>
          </section>

          {/* Name & Phone number */}
          <h2 className="titles">Complétez et vérifiez vos informations</h2>
          <section className="global-input-container">
            <section>
              <section className="input-container-pro">
                <label htmlFor="name" className="texts text-input-label-pro">
                  Nom :
                </label>
                <input
                  type="text"
                  placeholder="Ex : La crèche des petits lutins"
                  className="texts input-text-pro"
                />
              </section>
              <p className="texts information-name">
                Ce nom sera celui qui s'affichera en titre de votre annonce.
              </p>
            </section>
            <section className="input-container-pro">
              <label htmlFor="name" className="texts text-input-label-pro">
                N° de téléphone :
              </label>
              <input
                type="text"
                placeholder="Ex : 08.00.00.00.00"
                className="texts input-text-pro"
              />
            </section>
          </section>

          {/* Redirection to screen 2 of professional registration */}
          <nav className="nav-buttons-pro-register adaptatif-nav-buttons">
            <NavLink to="/" className="navlink-next-pro screen1 texts">
              <p>Suivant</p>
              <img
                src="../src/assets/images/illustration/arrow_right.svg"
                alt="Arrow"
              />
            </NavLink>
          </nav>
        </section>

        {/* ----- Right part of the screen ------ */}
        <section className="right-part-container-register-pro">
          <section className="descritif-background">
            <img
              src="../src/assets/images/illustration/img_structure_ecran1.png"
              alt="Avatar"
              className="image-descriptif-structure"
            />
            <h2 className="titles title-descriptif-structure">
              Choississez votre catégorie d'annonce
            </h2>
            <p className="text-descriptif-structure texts">
              En sélectionnant les catégories adéquates, vous aidez les parents
              à savoir à quoi s'attendre concernant l'accueil de leur enfant au
              sein de votre structure.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default StructureComponent;
