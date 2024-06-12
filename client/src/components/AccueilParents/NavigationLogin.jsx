import { NavLink } from "react-router-dom";
import "../../assets/css/fonts.css";

function NavigationLogin() {
  return (
    <div className="ButtonNaviguate">
      <NavLink to="/Pass"> Passer </NavLink>
      <NavLink to="/Login"> Se connecter </NavLink>
      <NavLink to="/SignUp"> S'inscrire </NavLink>
    </div>
  );
}

export default NavigationLogin;
