import { NavLink } from "react-router-dom";
import "../styles_components/Toolbar.css";

function Toolbar() {
  return (
    <div className="toolbar">
      <NavLink to="/" className="nav-toolbar">
        <img src="src/assets/images/icônes/Icône menu.png" alt="Menu" />
      </NavLink>
      <NavLink to="/recherche" className="nav-toolbar">
        <img src="src/assets/images/icônes/Icône search.png" alt="Search" />
      </NavLink>
      <NavLink to="/dossier-parent" className="nav-toolbar">
        <img src="src/assets/images/icônes/Icône user.png" alt="User" />
      </NavLink>
      <NavLink to="/reservation-status" className="nav-toolbar">
        <img
          src="src/assets/images/icônes/Icone reservation.png"
          alt="Notifications"
        />
      </NavLink>
      <NavLink to="/" className="nav-toolbar">
        <img src="src/assets/images/icônes/Icône message.png" alt="Messages" />
      </NavLink>
    </div>
  );
}

export default Toolbar;

// ReservationStatus
