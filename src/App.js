import "./App.css";

import { useContext } from "react";

import Column from "./components/column/Column.component";
import Navbar from "./components/navbar/navbar.component";
import Time from "./components/time/time.component";
import Result from "./components/result/result.component";

import { DESTINATIONS } from "./defaultValues";
import { VehicleContext } from "./contexts/vehicle.context";
import Footer from "./components/footer/footer.component";
import { PlanetContext } from "./contexts/planet.context";

function App() {
  const { canCheckResult, vehicleReset } = useContext(VehicleContext);
  const { planetReset } = useContext(PlanetContext);

  const handleReset = () => {
    vehicleReset();
    planetReset();
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <h1>Finding a falcon</h1>

        <Time />
        {!canCheckResult && (
          <>
            <h4>Select a planet you want to search</h4>
            <div className="dropdowns">
              {DESTINATIONS.map((destination) => (
                <Column key={destination} display={destination} />
              ))}
            </div>
          </>
        )}

        {canCheckResult && <Result />}
        {canCheckResult && (
          <button className="reset-button" onClick={handleReset}>
            Start Again
          </button>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
