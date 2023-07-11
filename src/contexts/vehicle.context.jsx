import axios from "axios";

import { createContext, useState, useEffect } from "react";
import { VEHICLES_URI } from "../defaultValues";

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

  const vehicleReset = () => {
    setTimeTaken(0);
    setSelectedVehicle(new Map());
    setCanCheckResult(false);
  }

  useEffect(() => {
    const getVehicles = async () => {
      const data = await axios.get(VEHICLES_URI);
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

    vehicleReset
  };

  return (
    <VehicleContext.Provider value={value}>{children}</VehicleContext.Provider>
  );
};
