import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Column from "./components/Column.component";

function App() {
  const [planets, setPlanets] = useState([]);
  const [token, setToken] = useState();
  const [vehicles, setVehicles] = useState([]);

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

  return (
    <div className="App">
      Main menu
      <div className="dropdowns">
        <Column
          display={"Destination 1"}
          options={planets}
          setOptions={setPlanets}
          list={vehicles}
          setList={setVehicles}
        />
        <Column
          display={"Destination 2"}
          options={planets}
          setOptions={setPlanets}
          list={vehicles}
          setList={setVehicles}
        />
        <Column
          display={"Destination 3"}
          options={planets}
          setOptions={setPlanets}
          list={vehicles}
          setList={setVehicles}
        />
        <Column
          display={"Destination 4"}
          options={planets}
          setOptions={setPlanets}
          list={vehicles}
          setList={setVehicles}
        />
      </div>
    </div>
  );
}

export default App;
