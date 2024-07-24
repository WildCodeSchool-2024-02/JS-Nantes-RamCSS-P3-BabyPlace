import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { useAuthParent } from "./AuthContextParent";
import { useAuth } from "./AuthContext";

export default function ProtectedRouteParent({ children }) {
  // const user = useAuthParent();
  const userParent = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userParent === null) {
      navigate("/connexion", { replace: true });
    }
  }, [navigate, userParent]);

  return children;
}
