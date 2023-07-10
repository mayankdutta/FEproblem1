import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const VehicleContext = createContext({
  canCheckResult: false,
  totalTime: 0,
  selectedVehicle: null,

  setCanCheckResult: () => null,
  setTotalTime: () => null,
  setSelectedVehicle: () => null,
});

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [totalTime, setTimeTaken] = useState(0);

  const [selectedVehicle, setSelectedVehicle] = useState(new Map());
  const [canCheckResult, setCanCheckResult] = useState(false);

  useEffect(() => {
    const getVehicles = async () => {
      const data = await axios.get(
        "https://findfalcone.geektrust.com/vehicles"
      );
      setVehicles(data.data);
    };

    getVehicles();
  }, []);

  useEffect(() => {
    setCanCheckResult(selectedVehicle.size == 4);
  }, [selectedVehicle]);

  const value = {
    vehicles,
    totalTime,
    selectedVehicle,
    canCheckResult,

    setTimeTaken,
    setVehicles,
    setSelectedVehicle,
    setCanCheckResult,
  };

  return (
    <VehicleContext.Provider value={value}>{children}</VehicleContext.Provider>
  );
};
