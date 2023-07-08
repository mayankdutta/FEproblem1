import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const VehicleContext = createContext({
  totalTime: 0,
  setTotalTime: () => null,

  vehicles: null,
  setVehicles: () => null,
});

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [totalTime, setTimeTaken] = useState(0);

  useEffect(() => {
    const getVehicles = async () => {
      const data = await axios.get(
        "https://findfalcone.geektrust.com/vehicles"
      );
      setVehicles(data.data);
    };

    getVehicles();
  }, []);

  const value = { vehicles, setVehicles, totalTime, setTimeTaken };

  return (
    <VehicleContext.Provider value={value}>{children}</VehicleContext.Provider>
  );
};
