import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Column from "./components/Column.component";

function App() {
  const [planets, setPlanets] = useState([]);
  const [token, setToken] = useState();
  const [vehicles, setVehicles] = useState([]);

  const [displayMap, setDisplayMap] = useState(
    new Map([
      ["Destination 1", ["Select ..."]],
      ["Destination 2", ["Select ..."]],
      ["Destination 3", ["Select ..."]],
      ["Destination 4", ["Select ..."]],
    ])
  );

  const Destinations = [
    "Destination 1",
    "Destination 2",
    "Destination 3",
    "Destination 4",
  ];

  const getVehicles = async () => {
    const data = await axios.get("https://findfalcone.geektrust.com/vehicles");
    setVehicles(data.data);
  };

  const getPlanets = async () => {
    const data = await axios.get("https://findfalcone.geektrust.com/planets");
    setPlanets(data.data);
  };

  const findingFalcon = async () => {
    const data = await axios.post(
      "https://findfalcone.geektrust.com/token",
      {},
      { headers: { Accept: "application/json" } }
    );
    setToken(data.data.token);
  };

  useEffect(() => {
    getPlanets();
    findingFalcon();
    getVehicles();
  }, []);

  // console.log("planets: ", planets);
  // console.log("vehicles: ", vehicles);

  return (
    <div className="App">
      <h1>Finding a falcon</h1>
      <h4>Select a planet you want to search</h4>
      <div className="dropdowns">
        {Destinations.map((destination) => (
          <Column
            key={destination}
            display={destination}
            options={planets}
            setOptions={setPlanets}
            list={vehicles}
            setList={setVehicles}
            displayMap={displayMap}
            setDisplayMap={setDisplayMap}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
