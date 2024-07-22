import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("nursery_id"));

  if (user === null) {
    setUser(localStorage.getItem("nursery_id"));
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

// Validation des props
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
