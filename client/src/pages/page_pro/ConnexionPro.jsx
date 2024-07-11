import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles_pro_pages/ConnexionPro.css";
import "../../assets/css/connexion.css";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import SignUp from "../../components/components_parent/SignUp";
import Login from "../../components/components_parent/Login";

function ConnexionPro() {
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
      <div className="logo-Pro">
        <img
          src="../src/assets/images/logos/logo_complet_pro.png"
          className="img-connexion-pro"
          alt="logo"
        />
      </div>

      <div className="logo-form">
        <div className="img-h2-desktop">
          <h2 className="titles h2-connexion">Gérez vos réservations</h2>
          <img
            className="img-desk"
            src="../src/assets/images/illustration/img_structure_desktop_ecran_connexion.png"
            alt="illustration d'une femme portant un bébé"
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
                  <Login
                    setEmailChecked={setEmailChecked}
                    checkBtnConnexion={checkBtnConnexion}
                    setPasswordChecked={setPasswordChecked}
                  />
                </Tab>
                <Tab key="signup" title="S'inscrire">
                  <SignUp
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

      <div className="nav-bottom">
        <NavLink to="/" className="btn-nav-bottom texts">
          accueil
        </NavLink>
      </div>
    </div>
  );
}

export default ConnexionPro;
