import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles_parents/connexion-parent.css";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import SignUpParent from "../../components/components_parent/SignUpParent";
import LoginParent from "../../components/components_parent/LoginParent";

function ConnexionParent() {
  const [emailChecked, setEmailChecked] = useState(false);
  const [passwordChecked, setPasswordChecked] = useState(false);
  const [selected, setSelected] = useState("login");
  const [checkBtnConnexion, setCheckBtnConnexion] = useState(false);

  // deblocage du bouton connexion
  useEffect(() => {
    if (emailChecked && passwordChecked) {
      setCheckBtnConnexion(true);
    } else {
      setCheckBtnConnexion(false);
    }
  }, [emailChecked, passwordChecked]);

  return (
    <div className="mobile-connexion">
      <div className="logo-h1-connexion">
        <img
          src="./src/assets/images/logos/logo_complet.png"
          className="img-connexion-parent"
          alt="logo"
        />
        <h1 className="titles h1-connexion ">Garde d'enfant à la demande</h1>
      </div>

      <div className="logo-form">
        <div className="img-h2-desktop">
          <h2 className="titles h2-connexion">
            Trouvez un⸱e professionel⸱le de la garde d’enfant
          </h2>
          <img
            className="img-desk"
            src="./src/assets/images/illustration/img_structure_desktop_ecran_connexion.png"
            alt="baby place"
          />
        </div>

        <div className="container-label-input-connexion shadow-none ">
          <Card
            color="secondary"
            className="max-w-full w-[340px] h-[600px] bg-transparent shadow-none"
          >
            <CardBody className="overflow-hidden ">
              <Tabs
                fullWidth
                size="lg"
                aria-label="Tabs form"
                selectedKey={selected}
                onSelectionChange={setSelected}
              >
                <Tab key="login" title="Connexion">
                  <LoginParent
                    setEmailChecked={setEmailChecked}
                    checkBtnConnexion={checkBtnConnexion}
                    setPasswordChecked={setPasswordChecked}
                  />
                </Tab>
                <Tab key="signup" title="S'inscrire">
                  <SignUpParent
                    setEmailChecked={setEmailChecked}
                    checkBtnConnexion={checkBtnConnexion}
                    setPasswordChecked={setPasswordChecked}
                  />
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
      <NavLink
        to="/connexionpro"
        className="btn-link-connexion link-pro-connexion texts"
      >
        Accès a votre espace
        <span className="btn-link-pro-connexion">pro</span>
      </NavLink>
      <div className="nav-bottom">
        <NavLink to="/" className="btn-nav-bottom texts">
          accueil
        </NavLink>
      </div>
    </div>
  );
}

export default ConnexionParent;
