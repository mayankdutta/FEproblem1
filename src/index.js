import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { PlanetProvider } from "./contexts/planet.context";
import { VehicleProvider } from "./contexts/vehicle.context";
import { TokenProvider } from "./contexts/token.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <PlanetProvider>
      <VehicleProvider>
        <TokenProvider>
          <App />
        </TokenProvider>
      </VehicleProvider>
    </PlanetProvider>
  </>
);
