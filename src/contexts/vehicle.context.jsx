import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const VehicleContext = createContext({
  vehicles: null,
  setVehicles: () => null,
});

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getVehicles = async () => {
      const data = await axios.get(
        "https://findfalcone.geektrust.com/vehicles"
      );
      setVehicles(data.data);
    };

    getVehicles();
  }, []);

  const value = { vehicles, setVehicles };

  return (
    <VehicleContext.Provider value={value}>{children}</VehicleContext.Provider>
  );
};
