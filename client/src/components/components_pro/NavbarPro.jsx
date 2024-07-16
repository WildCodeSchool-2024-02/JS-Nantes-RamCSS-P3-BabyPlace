import { NavLink, useNavigate } from "react-router-dom";

import "../styles_components/NavbarPro.css";

function NavbarPro() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    navigate("/pro/connexion");
  };

  return (
    <nav className="global-navbar-pro-container">
      <img
        className="logo-pro"
        src="../src/assets/images/logos/logo_complet_pro.png"
        alt="logo Babyplace pro"
      />
      <li className="menu-top-navbar-pro">
        <NavLink
          to="/pro/dashboard"
          className={({ isActive }) =>
            isActive ? "menu-item-navbar-pro-active" : "menu-item-navbar-pro"
          }
        >
          <img
            src="../src/assets/images/illustration/dashboard-icon.svg"
            alt="icone d'un dashboard"
          />
          <p className="texts menu-text-navbar-pro">Tableau de bord</p>
        </NavLink>
        <NavLink
          to="/pro/reservations"
          className={({ isActive }) =>
            isActive ? "menu-item-navbar-pro-active" : "menu-item-navbar-pro"
          }
        >
          <img
            src="../src/assets/images/illustration/Réservations-icon.svg"
            alt="icone d'un tableau"
          />
          <p className="texts menu-text-navbar-pro">Vos réservations</p>
        </NavLink>
      </li>
      <li className="menu-bottom-navbar-pro">
        <NavLink
          to="/pro/modification-du-profil"
          className="menu-item-navbar-pro"
        >
          <img
            src="../src/assets/images/illustration/profile-line.svg"
            alt="icone d'un profil"
          />
          <p className="texts menu-text-navbar-pro">Modification du profil</p>
        </NavLink>
        <NavLink onClick={handleLogOut} className="menu-item-navbar-pro">
          <img
            src="../src/assets/images/illustration/account-circle-line.svg"
            alt="icone d'un utilisateur"
          />
          <p className="texts menu-text-navbar-pro">Déconnexion</p>
        </NavLink>
      </li>
    </nav>
  );
}

export default NavbarPro;
