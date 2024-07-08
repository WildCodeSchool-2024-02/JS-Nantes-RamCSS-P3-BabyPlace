import PropTypes from "prop-types";

function NavParentDossier({ setComponent }) {
  const selectDossier = (e) => {
    setComponent(e.target.value);
  };

  return (
    <fieldset
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="radiogroup"
      aria-labelledby="radiogroup-label"
      onChange={selectDossier}
      className="section-radio"
    >
      <legend id="radiogroup-label">Sélectionner un dossier</legend>
      <label htmlFor="structure-dossier">
        <input
          type="radio"
          id="structure-dossier"
          name="dossier_parent"
          value="StructureComponent"
        />
        <span>Enfants</span>
      </label>

      <label htmlFor="localisation-dossier">
        <input
          type="radio"
          id="localisation-dossier"
          name="dossier_parent"
          value="LocalisationComponent"
        />
        <span>Parents</span>
      </label>

      <label htmlFor="pictures-dossier">
        <input
          type="radio"
          id="pictures-dossier"
          name="dossier_parent"
          value="PicturesComponent"
        />
        <span>Inscription</span>
      </label>
    </fieldset>
  );
}

NavParentDossier.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default NavParentDossier;
