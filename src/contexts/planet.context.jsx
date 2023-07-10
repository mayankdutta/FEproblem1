import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { defaultPlanetValues } from "../defaultValues";

export const PlanetContext = createContext({
  planets: null,
  selectedPlanets: null,

  setPlanets: () => null,
  setSelectedPlanets: () => null,
});

export const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState(null);
  const [selectedPlanets, setSelectedPlanets] = useState(
    new Map(defaultPlanetValues)
  );

  useEffect(() => {
    const getPlanets = async () => {
      const data = await axios.get("https://findfalcone.geektrust.com/planets");
      setPlanets(data.data);
    };

    getPlanets();
  }, []);


  const value = { planets, setPlanets, selectedPlanets, setSelectedPlanets};

  return (
    <PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>
  );
};
