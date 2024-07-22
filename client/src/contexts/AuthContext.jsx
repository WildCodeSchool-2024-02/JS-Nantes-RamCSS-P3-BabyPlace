import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export function AuthProvider({ children, isSignedIn }) {
  const [user, setUser] = useState(
    isSignedIn && localStorage.getItem("token") ? { id: 1 } : null
  );

  // Utilisation de useMemo pour mémoriser la valeur du contexte
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

// Validation des props
AuthProvider.propTypes = {
  children: PropTypes.func.isRequired,
  isSignedIn: PropTypes.func.isRequired,
};
