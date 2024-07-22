import { NavLink } from "react-router-dom";
import "../styles_components/Toolbar.css";

function Toolbar() {
  return (
    <div className="toolbar">
      <NavLink to="/menu" className="nav-toolbar">
        <img src="src/assets/images/icones/icone-menu.png" alt="Menu" />
      </NavLink>
      <NavLink to="/recherche" className="nav-toolbar">
        <img src="src/assets/images/icones/icone-search.png" alt="Search" />
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
      <NavLink to="/" className="nav-toolbar">
        <img src="src/assets/images/icones/icone-message.png" alt="Messages" />
      </NavLink>
    </div>
  );
}

export default Toolbar;

// ReservationStatus
