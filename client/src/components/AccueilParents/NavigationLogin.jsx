import { NavLink } from "react-router-dom";
import "../styles_components/NavigationLogin.css";
import "../../assets/css/fonts.css";

function NavigationLogin() {
  return (
    <div className="button-naviguate texts">
      <NavLink className="button-naviguate" to="/Pass">
        {" "}
        Passer{" "}
      </NavLink>
      <NavLink className="button-naviguate" to="/Login">
        {" "}
        Se connecter{" "}
      </NavLink>
      <NavLink className="button-naviguate" to="/SignUp">
        {" "}
        S'inscrire{" "}
      </NavLink>
    </div>
  );
}

export default NavigationLogin;
