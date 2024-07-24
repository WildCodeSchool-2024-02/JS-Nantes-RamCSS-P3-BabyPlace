import PropTypes from "prop-types";

function NavParentDossier({ setComponent, component }) {
  const selectDossier = (e) => {
    setComponent(e.target.value);
  };

  return (
    <>
      <svg
        width="0"
        height="0"
        viewBox="0 0 100 100"
        className=".main-dossier-parent-form"
      >
        <defs className=".main-dossier-parent-form">
          <clipPath id="roundedPolygon" className=".main-dossier-parent-form">
            <path
              d="M74.9952 19.0299C74.9952 19.0299 72.5188 7.19619 61.8186 3.03839C56.7077 1.03945 47.524 0.0799576 38.5 0C29.476 0.0799576 20.2923 1.03945 15.2613 2.95843C4.56025 7.11623 2.08465 18.95 2.08465 18.95C0.487486 25.6664 -0.0715216 32.4628 0.0083366 38.4596C-0.0715216 44.5364 0.407628 51.3328 2.08465 58.0492C2.08465 58.0492 4.56025 69.883 15.2613 74.0408C20.2923 75.9598 29.476 76.9192 38.5 77C47.524 76.9192 56.7077 76.0397 61.7379 74.0408C72.4397 69.883 74.9145 58.0492 74.9145 58.0492C76.5117 51.3328 77.0715 44.5364 76.9916 38.5396C77.0715 32.4628 76.5923 25.6664 74.9952 19.0299"
              fill="url(#paint0_linear_8321_31)"
            />{" "}
          </clipPath>
        </defs>
      </svg>

      <fieldset
        aria-labelledby="radiogroup-label"
        onChange={selectDossier}
        className={
          component === ""
            ? "flex flex-col w-[300px] gap-5 section-radio-inscription-home font-bold texts"
            : "section-radio-inscription texts"
        }
      >
        <label htmlFor="structure-dossier" className="form-enfant font-bold">
          <input
            type="radio"
            id="structure-dossier"
            name="dossier_parent"
            value="DossierEnfant"
          />
          <span className="form-enfant">Enfants</span>
        </label>

        <label htmlFor="localisation-dossier">
          <input
            type="radio"
            id="localisation-dossier"
            name="dossier_parent"
            value="DossierInscriptionParent"
          />
          <span>Parents</span>
        </label>

        <label htmlFor="pictures-dossier">
          <input
            type="radio"
            id="pictures-dossier"
            name="dossier_parent"
            value="DossierInscription"
          />
          <span>Inscription</span>
        </label>
      </fieldset>
    </>
  );
}
NavParentDossier.propTypes = {
  setComponent: PropTypes.func.isRequired,
  component: PropTypes.string,
};

NavParentDossier.defaultProps = {
  component: "",
};
export default NavParentDossier;
