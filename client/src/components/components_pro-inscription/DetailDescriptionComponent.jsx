import { NavLink } from "react-router-dom";

import "../styles_components/DetailDescriptionComponent.css";

function DetailDescriptionComponent() {
  return (
    <section className="adaptatif-global-container-detail">
      {/* ----- Visual indicating the progress of registration => level 3 ----- */}
      <progress
        className="adaptatif-advanced-line-1"
        name="Barre de progression"
        max="100"
        value="28"
      />

      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro adaptatif-left-part-detail">
          <h2 className="titles">Les petits plus de votre accueil</h2>
          <p className="texts">
            {" "}
            Il s'agit en général des services que les parents souhaitent
            retrouver pour l'accueil de leurs enfants. Vous pourrez ajouter
            d'autres après la publication.
          </p>
          <section className="detail-checks">
            <h3 className="titles little-titles-details">Formations</h3>
            <section
              className="checkboxgroup-detail"
              aria-label="Type de formations"
            >
              <section>
                <input
                  id="pcsc1"
                  name="pcsc1"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="pcsc1" className=" texts">
                  Formation premier secours (PCSC1)
                </label>
              </section>
              <section>
                <input
                  id="nesting"
                  name="nesting"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="nesting" className=" texts">
                  Formation Nesting (pollution intérieure)
                </label>
              </section>
              <section>
                <input
                  id="montessori"
                  name="montessori"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="montessori" className=" texts">
                  Pédagogie Montessori / Pikler Loczy
                </label>
              </section>
              <section>
                <input
                  id="disability"
                  name="disability"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="disability" className=" texts">
                  Formation accueil d'enfant handicapés
                </label>
              </section>
            </section>
          </section>
          <section className="detail-checks">
            <h3 className="titles little-titles-details">Accueil</h3>
            <section
              className="checkboxgroup-detail"
              aria-label="Type d'acccueil"
            >
              <section>
                <input
                  id="garden"
                  name="garden"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="garden" className=" texts">
                  Espace extérieur / jardin
                </label>
              </section>
              <section>
                <input
                  id="outing"
                  name="outing"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="outing" className=" texts">
                  Sorties extérieures
                </label>
              </section>
              <section>
                <input
                  id="pets"
                  name="pets"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="pets" className=" texts">
                  Présence d'animaux
                </label>
              </section>
              <section>
                <input
                  id="pollution"
                  name="pollution"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="pollution" className=" texts">
                  0% pollution intérieure
                </label>
              </section>
              <section>
                <input
                  id="meal"
                  name="meal"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="meal" className=" texts">
                  Repas fournis
                </label>
              </section>
              <section>
                <input
                  id="hygiene"
                  name="hygiene"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="hygiene" className=" texts">
                  Produits d'hygiène fournis
                </label>
              </section>
            </section>
          </section>
          <section className="detail-checks">
            <h3 className="titles little-titles-details">Activités</h3>
            <section
              className="checkboxgroup-detail"
              aria-label="Type d'activités'"
            >
              <section>
                <input
                  id="walk"
                  name="walk"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="walk" className=" texts">
                  Promenades
                </label>
              </section>
              <section>
                <input
                  id="awakening"
                  name="awakening"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="awakening" className=" texts">
                  Activités d'éveil
                </label>
              </section>
              <section>
                <input
                  id="music"
                  name="music"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="music" className=" texts">
                  Atelier musique
                </label>
              </section>
              <section>
                <input
                  id="artistic"
                  name="artistic"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="artistic" className=" texts">
                  Activités artistiques
                </label>
              </section>
              <section>
                <input
                  id="international"
                  name="international"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="international" className=" texts">
                  Bilingue / internationale
                </label>
              </section>
              <section>
                <input
                  id="ram"
                  name="ram"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="ram" className=" texts">
                  Bibliothèque / Ludothèque / RAM
                </label>
              </section>
              <section>
                <input
                  id="transport"
                  name="transport"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="transport" className=" texts">
                  Transport d'enfants
                </label>
              </section>
            </section>
          </section>
          <section className="detail-checks">
            <h3 className="titles little-titles-details">
              Liens avec les parents
            </h3>
            <section
              className="checkboxgroup-detail"
              aria-label="Type de liens avec les parents"
            >
              <section>
                <input
                  id="albums"
                  name="albums"
                  type="checkbox"
                  className="input-checkbox-detail-pro"
                />
                <label htmlFor="albums" className=" texts">
                  Albums photos
                </label>
              </section>
            </section>
          </section>

          {/* Redirection to screen 2 of professional registration */}
          <nav className="nav-buttons-pro-register nav-button-adaptatif-detail">
            <NavLink to="/" className="navlink-prev-pro screen2 texts">
              <p>&lt; Retour</p>
            </NavLink>
            {/* Redirection to screen 4 of professional registration */}
            <NavLink to="/" className="navlink-next-pro screen2 texts">
              <p>Suivant</p>
              <img
                src="../src/assets/images/illustration/arrow_right.svg"
                alt="Arrow"
              />
            </NavLink>
          </nav>
        </section>

        {/* ----- Right part of the screen ------ */}
        <section className="right-part-container-register-pro adaptatif-right-part-detail">
          <section className="descritif-background">
            <h2 className="titles title-descriptif-structure">
              Valorisez votre expérience et vos services
            </h2>
            <p className="text-descriptif-structure texts">
              N'hésitez pas à expliquer en détail vos formations et tout votre
              passé de garde d'enfant.
              <br />
              Différenciez-vous par des compétences ou des qualités inédites
              (blog de nounou, ménage écologique, horaires décalés, ...)
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default DetailDescriptionComponent;
