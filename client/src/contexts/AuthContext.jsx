import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userPro, setUserPro] = useState(localStorage.getItem("nursery_id"));
  const [userParent, setUserParent] = useState(
    localStorage.getItem("parent_id")
  );

  useEffect(() => {
    if (userPro === null || userParent === null) {
      const userProChange = localStorage.getItem("nursery_id");
      const userParentChange = localStorage.getItem("parent_id");
      if (userProChange || userParentChange) {
        setUserPro(userProChange);
        setUserParent(userParentChange);
      }
    }
  }, [userPro]);

  return (
    <AuthContext.Provider value={userPro !== null ? userPro : userParent}>
      {children}
    </AuthContext.Provider>
  );
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
