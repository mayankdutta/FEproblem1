import "./navbar.styles.css";

import { useContext } from "react";

import { PlanetContext } from "../../contexts/planet.context";
import { VehicleContext } from "../../contexts/vehicle.context";

const Navbar = () => {
  const { vehicleReset } = useContext(VehicleContext);
  const { planetReset } = useContext(PlanetContext);

  const handleReset = () => {
    vehicleReset();
    planetReset();
  };

  return (
    <div className="Navbar">
      <div className="navitems">
        <div className="navitem">Geek Trust Home</div>
        <div className="navitem" onClick={handleReset}>
          Reset
        </div>
      </div>
    </div>
  );
};

export default Navbar;
