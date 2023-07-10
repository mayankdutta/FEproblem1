import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Column from "./components/column/Column.component";
import Navbar from "./components/navbar/navbar.component";
import Time from "./components/time/time.component";

import "./App.css";
import { VehicleContext } from "./contexts/vehicle.context";
import Result from "./components/result/result.component";

function App() {
  const [token, setToken] = useState();

  const { canCheckResult } = useContext(VehicleContext);

  const handleReset = () => window.location.reload(true);

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

        {canCheckResult ? (
          <>{canCheckResult && <Result token={token} />}</>
        ) : (
          <>
            <h4>Select a planet you want to search</h4>
            <div className="dropdowns">
              {Destinations.map((destination) => (
                <Column key={destination} display={destination} />
              ))}
            </div>
          </>
        )}

        <Time />
        {canCheckResult && <button onClick={handleReset}>Start Again</button>}
      </div>
    </>
  );
}

export default App;
