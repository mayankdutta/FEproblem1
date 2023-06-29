import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./components/Dropdown.component";
import Column from "./components/Column.component";

function App() {
  const [planets, setPlanets] = useState([]);

  const [vehicles, setVehicles] = useState([]);
  const [token, setToken] = useState();

  const getPlanets = async () => {
    const data = await axios.get("https://findfalcone.geektrust.com/planets");
    setPlanets(data.data);
  };

  const getVehicles = async () => {
    const data = await axios.get("https://findfalcone.geektrust.com/vehicles");
    setVehicles(data.data);
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
    getVehicles();
    findingFalcon();
  }, []);

  console.log(vehicles)

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
          display={"Destination 1"}
          options={planets}
          setOptions={setPlanets}
          list={vehicles}
          setList={setVehicles}
        />
        {/* <Dropdown display={"Destination 2"} options={planet} setOptions = {setPlanet}/> */}
        {/* <Dropdown display={"Destination 3"} options={planet} setOptions = {setPlanet}/> */}
        {/* <Dropdown display={"Destination 4"} options={planet} setOptions = {setPlanet}/> */}
      </div>
    </div>
  );
}

export default App;
