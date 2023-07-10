import { useEffect, useState } from "react";
import axios from "axios";

import Column from "./components/column/Column.component";
import Navbar from "./components/navbar/navbar.component";
import Time from "./components/time/time.component";

import "./App.css";

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

  return (
    <>
      <Navbar />
      <div className="App">
        <h1>Finding a falcon</h1>
        <h4>Select a planet you want to search</h4>
        <div className="dropdowns">
          {Destinations.map((destination) => (
            <Column key={destination} display={destination} />
          ))}
        </div>
        <Time />
      </div>
    </>
  );
}

export default App;
