import { NavLink, useNavigate } from "react-router-dom";

import HeaderReservationParent from "../../components/components_parent/HeaderReservationParent";
import Toolbar from "../../components/components_parent/Toolbar";

function OptionMenuParent() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("parent_id");
    sessionStorage.removeItem("token");

    navigate("/connexion");
  };

  return (
    <>
      <HeaderReservationParent />
      <section className="mt-[200px] flex flex-col justify-between h-[60vh] texts font-bold">
        <section className="flex flex-col p-3 gap-5">
          <NavLink
            to="/dossier-parent"
            className="flex gap-2 justify-start items-center"
          >
            <img
              src="../src/assets/images/icônes/icone-dossier.png"
              alt="dossier d'inscription"
            />
            Dossier d'inscription
          </NavLink>
          <NavLink
            to="/reservation"
            className="flex gap-2 justify-start items-center"
          >
            <img
              src="../src/assets/images/icônes/icone-reservation.png"
              alt="réservation"
            />
            Mes réservations
          </NavLink>
          <NavLink to="/faq" className="flex gap-2 justify-start items-center">
            <img
              src="../src/assets/images/icônes/icone-aide.png"
              alt="foire au question"
            />
            Aide
          </NavLink>
        </section>
        <section>
          <button
            onClick={handleLogOut}
            type="button"
            className="text-black flex gap-2 justify-start items-center font-bold"
          >
            <img
              src="../src/assets/images/icônes/icone-account-circle.svg"
              alt=""
            />
            Déconnexion
          </button>
        </section>
      </section>

      <Toolbar />
    </>
  );
}
export default OptionMenuParent;
