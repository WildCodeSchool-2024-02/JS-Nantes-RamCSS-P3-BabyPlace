import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    // console.log('useEffect est làààààà');
    // console.log('lolo', localStorage)
    // console.log('token:', localStorage.getItem("token"));
    // console.log('nurseryId dans localStorage:', localStorage.getItem("userId"))
    // console.log('isSignedIn:', isSignedIn);
    if (localStorage.getItem("token")) {
      const userId = localStorage.getItem("userId");
      // console.log('userId:', userId);
      setUser(userId);
      // if (userId !== null) {
      //   setIsSignedIn(true)
      // } else {
      //   setIsSignedIn(false)
      // }
    } else {
      setUser(null);
    }
  }, []);

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
