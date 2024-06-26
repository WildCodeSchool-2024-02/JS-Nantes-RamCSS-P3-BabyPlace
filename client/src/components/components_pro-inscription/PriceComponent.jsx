import React from "react";
import { Button, Input, Tabs, Tab } from "@nextui-org/react";

import "../styles_components/PriceComponent.css";

function PriceComponent() {
  const [selected1, setSelected1] = React.useState("no");
  const [selected2, setSelected2] = React.useState("no");
  const [selected3, setSelected3] = React.useState("no");

  return (
    <section className="global-container-screen-register">
      {/* ----- Visual indicating the progress of registration => level 0 ----- */}
      <progress
        className="advanced-line-0"
        name="Barre de progression"
        max="100"
        value="63"
      />

      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro left-part-adaptatif">
          <section className="global-price-container">
            <h2 className="titles">Le tarif horaire</h2>
            <p className="texts">
              Vous pourrez changer ce tarif à tout moment dans votre compte.
            </p>
            <Input
              isRequired
              type="number"
              label="Tarif horaire"
              color="secondary"
              labelPlacement="inside"
              className="max-w-lg texts"
              size="lg"
              min="0"
              variant="bordered"
              placeholder="Indiquez votre tarif"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-medium">€</span>
                </div>
              }
            />
            <Input
              type="number"
              label="Heures complémentaires majorées"
              color="secondary"
              labelPlacement="inside"
              className="max-w-lg texts"
              size="lg"
              min="0"
              variant="bordered"
              placeholder="Indiquez votre tarif"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-medium">€</span>
                </div>
              }
            />
          </section>
          <section>
            <section>
              <h2 className="titles">Les services d'accueil</h2>
              <p className="texts">
                Déterminez les services que vous proposez soit de manière
                obligatoire (les parents sont obligés de souscrire à ce
                service), soit de manière optionnelle (les parents peuvent
                choisir d'y souscrire ou pas).
              </p>
              <section className="complementary-services">
                <section className="text-complementary-services">
                  <p>
                    <strong>Indemnités d'entretien</strong>
                  </p>
                  <p>Frais courants</p>
                </section>
                <Tabs
                  selectedKey={selected1}
                  onSelectionChange={setSelected1}
                  size="lg"
                  aria-label="Indemnité d'entretien? Oui / Non"
                  variant="bordered"
                  color="secondary"
                >
                  <Tab key="no" title="Non" />
                  <Tab key="yes" title="Oui" />
                </Tabs>
                <Input
                  isDisabled={selected1 === "no"}
                  type="number"
                  min="0"
                  color="secondary"
                  label="Indemnités d'entretien"
                  variant="bordered"
                  placeholder="Indiquez votre tarif"
                  className="max-w-[220px]"
                />
              </section>
              <section className="complementary-services-container">
                <section className="complementary-services">
                  <section className="text-complementary-services">
                    <p>
                      <strong>Indemnités de repas</strong>
                    </p>
                    <p>Lorsque vous préparez les repas</p>
                  </section>
                  <Tabs
                    selectedKey={selected2}
                    onSelectionChange={setSelected2}
                    size="lg"
                    aria-label="Indemnité repas? Oui / Non"
                    variant="bordered"
                    color="secondary"
                  >
                    <Tab key="no" title="Non" />
                    <Tab key="yes" title="Oui" />
                  </Tabs>
                  <Input
                    isDisabled={selected2 === "no"}
                    type="number"
                    min="0"
                    color="secondary"
                    label="Indemnités de repas"
                    variant="bordered"
                    placeholder="Indiquez votre tarif"
                    className="max-w-[220px]"
                  />
                </section>
                <section className="complementary-services">
                  <section className="text-complementary-services">
                    <p>
                      <strong>Indemnités kilométriques</strong>
                    </p>
                    <p>Lorsque vous utilisez votre véhicule</p>
                  </section>
                  <Tabs
                    selectedKey={selected3}
                    onSelectionChange={setSelected3}
                    size="lg"
                    aria-label="Indemnité kilométrique? Oui / Non"
                    variant="bordered"
                    color="secondary"
                  >
                    <Tab key="no" title="Non" />
                    <Tab key="yes" title="Oui" />
                  </Tabs>
                  <Input
                    isDisabled={selected3 === "no"}
                    type="number"
                    min="0"
                    color="secondary"
                    label="Indemnités kilométriques"
                    variant="bordered"
                    placeholder="Indiquez votre tarif"
                    className="max-w-[220px]"
                  />
                </section>
              </section>
            </section>
          </section>

          {/* Redirection to prev screen of professional registration */}
          <nav className="nav-buttons-pro-register adaptatif-nav-buttons-use-conditions">
            <Button
              variant="shadow"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
              size="lg"
            >
              Retour
            </Button>
            {/* Redirection to next screen of professional registration */}
            <Button
              variant="shadow"
              className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
              size="lg"
            >
              Suivant
            </Button>
          </nav>
        </section>

        {/* ----- Right part of the screen ------ */}
        <section className="right-part-container-register-pro">
          <section className="descritif-background">
            <img
              src="../src/assets/images/illustration/ampoule.png"
              alt="Visuel d'une ampoule"
              className="image-descriptif-structure"
            />
            <h2 className="titles title-descriptif-structure">
              Commencez avec un prix plus bas pour attirer les réservations.
            </h2>
            <p className="text-descriptif-structure texts">
              Les nouveaux professionnels inscrits sur Babyplace commencent avec
              un prix bas pour attirer leurs premières réservations.
            </p>
            <p className="text-descriptif-structure texts">
              Ils ont ainsi plus d'avis de la part de parents, ce qui leur
              permet de gagner en crédibiltié.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default PriceComponent;
