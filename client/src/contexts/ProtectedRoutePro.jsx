import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./AuthContext";

export default function ProtectedRoutePro({ children }) {
  const user = useAuth();
  // console.log('je suis user', user)
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/pro/connexion", { replace: true });
    }
  }, [navigate, user]);

  return children;
}
