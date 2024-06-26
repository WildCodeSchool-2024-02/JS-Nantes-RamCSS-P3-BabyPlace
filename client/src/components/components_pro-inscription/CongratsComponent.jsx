import { Button } from "@nextui-org/react";

import "../styles_components/CongratsComponent.css";

function CongratsComponent() {
  return (
    <section className="global-container-screen-register">
      {/* ----- full screen ----- */}
      <section className="global-container-register-pro">
        {/* ----- Left part of the screen ------ */}
        <section className="left-part-container-register-pro left-part-adaptatif-congrats">
          <section className="congrats-text-container">
            <h2 className="titles">Hourra !</h2>
            <p className="texts">
              Nous avons bien pris en compte tous les éléments pour paramétrer
              votre profil Babyplace.
              <br />
              Il ne vous reste plus qu'une dernière étape de sécurité à
              franchir.
            </p>
            <p>
              Votre compte sera vérifié par notre équipe dans un délai de 48h.
            </p>
          </section>
          <section className="congrats-text-container">
            <h2 className="titles">Sécurité</h2>
            <p className="texts">
              Nous avons besoin d'effectuer une dernière vérification avant
              validation définitive de votre compte sous 48h jour ouvrés :
            </p>
          </section>

          {/* Redirection to next screen of professional registration */}
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
              src="../src/assets/images/illustration/congrats.png"
              alt="Avatar"
            />
          </section>
        </section>
      </section>
    </section>
  );
}

export default CongratsComponent;
