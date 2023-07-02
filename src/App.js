import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Column from "./components/Column.component";

function App() {
  const [token, setToken] = useState();

  const Destinations = [
    "Destination 1",
    "Destination 2",
    "Destination 3",
    "Destination 4",
  ];

  const findingFalcon = async () => {
    const data = await axios.post(
      "https://findfalcone.geektrust.com/token",
      {},
      { headers: { Accept: "application/json" } }
    );
    setToken(data.data.token);
  };

  useEffect(() => {
    findingFalcon();
  }, []);

  // console.log("planets: ", planets);
  // console.log("vehicles: ", vehicles);

  return (
    <div className="App">
      <h1>Finding a falcon</h1>
      <h4>Select a planet you want to search</h4>
      <div className="dropdowns">
        {Destinations.map((destination) => (
          <Column key={destination} display={destination} />
        ))}
      </div>
    </div>
  );
}

export default App;
