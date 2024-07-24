import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./AuthContext";

export default function ProtectedRoutePro({ children }) {
  const userPro = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userPro === null) {
      navigate("/pro/connexion", { replace: true });
    }
  }, [navigate, userPro]);

  return children;
}
