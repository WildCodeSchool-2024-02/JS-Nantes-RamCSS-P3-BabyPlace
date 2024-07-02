import PropTypes from "prop-types";

import { Button, Textarea, User } from "@nextui-org/react";

import "../styles_components/DescriptionComponent.css";

function DescriptionComponent({ setComponent }) {
  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 3 ----- */}
      <progress
        className="advanced-line-1"
        name="Barre de progression"
        max="100"
        value="21"
      />

      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro">
          <h2 className="titles"> Présentez vous auprès des parents</h2>
          <p className="description-aera-pro texts">
            Présentez vous et décrivez votre expérience. Indiquez les activités
            d'éveil que vous proposez aux enfants : respect du rythme de
            l'enfant, activités, sorties, pédagogie, ...
            <br />
            Décrivez les espaces de jeu, le lieu de sommeil, les équipements
            dont vous disposez.
          </p>
          <Textarea
            variant="faded"
            size="lg"
            color="secondary"
            label="Description"
            placeholder="Ecrivez votre description ici"
            description="Ecrivez une description détaillant votre structure."
            className=" w-full max-h-lg"
          />

          <nav className="adaptatif-nav-buttons">
            <section className="display-buttons">
              {/* Redirection to previous screen of professional registration */}
              <Button
                onClick={() => setComponent("PicturesComponent")}
                variant="shadow"
                className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
                size="lg"
              >
                Retour
              </Button>
              {/* Redirection to next screen of professional registration */}
              <Button
                onClick={() => setComponent("DetailDescriptionComponent")}
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
        <section className="right-part-container-register-pro">
          <section className="descritif-background adaptatif-descritif-background">
            <h2 className="titles title-descriptif-structure">
              Inspirez vous des annonces Babyplace
            </h2>
            <User
              size="lg"
              name="Les Lutins Terribles"
              description="Crèche multi-accueil"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                size: "lg",
              }}
            />
            <p className="text-descriptif-structure texts">
              La crèche "Les Lutins Terribles" agrée 2013 vous propose ses
              services pour garder votre ou vos enfants dans sa structure.
              <br />
              Disposant d'un extérieur avec une aire de jeu et proche du tram.
              <br />
              Nous sommes une structure avec 4 professionnelles prête à
              accueillir vos lutins les plus terribles.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

// Validation des props
DescriptionComponent.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default DescriptionComponent;
