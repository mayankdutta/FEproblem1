import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PlanetContext = createContext({
  planets: null,
  setPlanets: () => null,
  displayMap: null,
  setDisplayMap: () => null,
});

export const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState(null);
  const [displayMap, setDisplayMap] = useState(
    new Map([
      ["Destination 1", ["Select ..."]],
      ["Destination 2", ["Select ..."]],
      ["Destination 3", ["Select ..."]],
      ["Destination 4", ["Select ..."]],
    ])
  );

  useEffect(() => {
    const getPlanets = async () => {
      const data = await axios.get("https://findfalcone.geektrust.com/planets");
      setPlanets(data.data);
    };

    getPlanets();
  }, []);

  console.log("debugging map:", displayMap);

  const value = { planets, setPlanets, displayMap, setDisplayMap };

  return (
    <PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>
  );
};
