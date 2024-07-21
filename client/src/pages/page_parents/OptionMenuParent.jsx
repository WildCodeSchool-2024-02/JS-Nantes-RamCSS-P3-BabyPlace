import { NavLink } from "react-router-dom";

import HeaderReservvationParent from "../../components/components_parent/HeaderReservationParent";
import Toolbar from "../../components/components_parent/Toolbar";

function OptionMenuParent() {
  return (
    <>
      <HeaderReservvationParent />
      <section className="mt-[200px] flex flex-col">
        <section className="flex flex-col">
          <NavLink to="/dossier-parent">Dossier d'inscription</NavLink>
          <NavLink to="/reservation">Mes réservations</NavLink>
          <NavLink to="/faq">Aide</NavLink>
        </section>
        <section>
          <button type="button" className="text-black">
            Déconnexion
          </button>
        </section>
      </section>

      <Toolbar />
    </>
  );
}
export default OptionMenuParent;
