import PropTypes from "prop-types";

import {
  Button,
  CheckboxGroup,
  Checkbox,
  ScrollShadow,
} from "@nextui-org/react";

import "../styles_components/DetailDescriptionComponent.css";

function DetailDescriptionComponent({ setComponent }) {
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
      <section className="global-container-detail">
        <section className="container-without-progress-bar">
          {/* ----- Left part of the screen ------ */}

          <section className="left-part-container-register-pro adaptatif-left-part-detail">
            <ScrollShadow hideScrollBar className="w-full h-60%">
              <section className="adaptatif-left-part-detail">
                <h2 className="titles">Les petits plus de votre accueil</h2>
                <p className="texts">
                  {" "}
                  Il s'agit en général des services que les parents souhaitent
                  retrouver pour l'accueil de leurs enfants. Vous pourrez
                  ajouter d'autres après la publication.
                </p>
                <section className="detail-checks">
                  <h3 className="titles little-titles-details">Formations</h3>
                  <CheckboxGroup
                    label="Sélectionnez les formations que vous possédez :"
                    color="secondary"
                  >
                    <Checkbox value="psc1">
                      Formation premier secours (PCSC1)
                    </Checkbox>
                    <Checkbox value="nesting">
                      Formation Nesting (pollution intérieure)
                    </Checkbox>
                    <Checkbox value="montessori">
                      Pédagogie Montessori | Pikler Loczy
                    </Checkbox>
                    <Checkbox value="disability">
                      Formation accueil d'enfant handicapés
                    </Checkbox>
                  </CheckboxGroup>
                </section>
                <section className="detail-checks">
                  <h3 className="titles little-titles-details">Accueil</h3>
                  <CheckboxGroup
                    label="Sélectionnez les types d'accueils que vous proposez :"
                    color="secondary"
                  >
                    <Checkbox value="garden">
                      Espace extérieur | jardin
                    </Checkbox>
                    <Checkbox value="outing">Sorties extérieures</Checkbox>
                    <Checkbox value="pets">Présence d'animaux</Checkbox>
                    <Checkbox value="disability">
                      0% pollution intérieure
                    </Checkbox>
                    <Checkbox value="meal">Repas fournis</Checkbox>
                    <Checkbox value="hygiene">
                      Produits d'hygiène fournis
                    </Checkbox>
                  </CheckboxGroup>
                  <section className="detail-checks">
                    <h3 className="titles little-titles-details">Activités</h3>
                    <CheckboxGroup
                      label="Sélectionnez les types d'activités que vous proposez :"
                      color="secondary"
                    >
                      <Checkbox value="walk">Promenades</Checkbox>
                      <Checkbox value="awakening">Activités d'éveil</Checkbox>
                      <Checkbox value="music">Atelier musique</Checkbox>
                      <Checkbox value="artistic">
                        Activités artistiques
                      </Checkbox>
                      <Checkbox value="international">
                        Bilingue | internationale
                      </Checkbox>
                      <Checkbox value="ram">
                        Bibliothèque | Ludothèque | RAM
                      </Checkbox>
                      <Checkbox value="transport">Transport d'enfants</Checkbox>
                    </CheckboxGroup>
                  </section>
                </section>
                <section className="detail-checks">
                  <h3 className="titles little-titles-details">
                    Liens avec les parents
                  </h3>
                  <CheckboxGroup
                    label="Sélectionnez les types de liens avec les parents que vous proposez :"
                    color="secondary"
                  >
                    <Checkbox value="albums">Albums photos</Checkbox>
                  </CheckboxGroup>
                </section>
              </section>
            </ScrollShadow>

            <nav className="adaptatif-nav-buttons">
              <section className="display-buttons">
                {/* Redirection to screen 2 of professional registration */}
                <Button
                  onClick={() => setComponent("DescriptionComponent")}
                  variant="shadow"
                  className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                  size="lg"
                >
                  Retour
                </Button>
                {/* Redirection to next screen of professional registration */}
                <Button
                  onClick={() => setComponent("UseConditionComponent")}
                  variant="shadow"
                  className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                  size="lg"
                >
                  Suivant
                </Button>
              </section>
            </nav>
          </section>

          {/* ----- Right part of the screen ------ */}
          <section className="right-part-container-register-pro adaptatif-right-part-detail">
            <section className="descritif-background adaptatif-descritif-background">
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
    </section>
  );
}

// Validation des props
DetailDescriptionComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default DetailDescriptionComponent;
