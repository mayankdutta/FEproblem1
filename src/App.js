import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [planet, setPlanet] = useState()
  const [vehicle, setVehicle] = useState([])
  const [token, setToken] = useState()
 

  const getPlanets = async () => {
    const data = await axios.get("https://findfalcone.geektrust.com/planets");
    console.log("planets data: ", data.data);
  };

  const getVehicles = async () => {
    const data = await axios.get("https://findfalcone.geektrust.com/vehicles");

    for (let i of data.data) {
      setVehicle([...vehicle, i]);
    }

    console.log("vehicles data: ", data.data);
  };

  const findingFalcon = async () => {
    const data = await axios.post(
      "https://findfalcone.geektrust.com/token",
      {},
      { headers: { "Accept": "application/json" } }
    );
    console.log("finding Falcon: ", data.data);
  };

  console.log('array yvehicle: ', vehicle);

  useEffect(() => {
    getPlanets();
    getVehicles();
    findingFalcon();
  }, []);

  return <div className="App">Hello world</div>;
}

export default App;
