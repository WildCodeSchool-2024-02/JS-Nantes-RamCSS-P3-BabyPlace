import { NavLink } from "react-router-dom";
import "../styles_components/Toolbar.css";

function Toolbar() {
  return (
    <div className="toolbar shadow-[0_2px_60px_-15px_rgba(0,0,0,0.3)]">
      <NavLink to="/menu" className="nav-toolbar">
        <img src="src/assets/images/icones/icone-menu.png" alt="Menu" />
      </NavLink>
      <NavLink to="/recherche" className="nav-toolbar">
        <img src="src/assets/images/icones/tetine.png" alt="Search" />
      </NavLink>
      <NavLink to="/dossier-parent" className="nav-toolbar">
        <img src="src/assets/images/icones/icone-user.png" alt="User" />
      </NavLink>
      <NavLink to="/reservation-status" className="nav-toolbar">
        <img
          src="src/assets/images/icones/icone-reservation.png"
          alt="Notifications"
        />
      </NavLink>
      <NavLink to="/acces-invite" className="nav-toolbar">
        <img src="src/assets/images/icones/icone-search.png" alt="Messages" />
      </NavLink>
    </div>
  );
}

export default Toolbar;
