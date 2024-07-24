import { createContext, useEffect, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useAuth } from "./AuthContext";

export const NurseryLoggedContext = createContext();
const nurseryId = localStorage.getItem("nursery_id");

const fetchNurseryData = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/nurseries/${nurseryId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching nursery data", error);
    throw error;
  }
};

export function NurseryLoggedContextProvider({ children }) {
  const userPro = useAuth();
  const [nurseryData, setNurseryData] = useState(null);

  const fetchNursery = async () => {
    try {
      const data = await fetchNurseryData();
      setNurseryData(data);
    } catch (error) {
      console.error("Failed to fetch nursery data", error);
    }
  };

  useEffect(() => {
    fetchNursery();
  }, [userPro]);

  const value = useMemo(
    () => ({ nurseryData, setNurseryData, fetchNursery }),
    [nurseryData, setNurseryData]
  );

  return (
    <NurseryLoggedContext.Provider value={value}>
      {children}
    </NurseryLoggedContext.Provider>
  );
}

// Validation des props
NurseryLoggedContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useNurseryLogged = () => useContext(NurseryLoggedContext);
