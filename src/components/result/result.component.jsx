import axios from "axios";

import { useContext, useEffect, useState } from "react";

import { VehicleContext } from "../../contexts/vehicle.context";
import { PlanetContext } from "../../contexts/planet.context";
import { TokenContext } from "../../contexts/token.context";

const Result = () => {
  const { selectedVehicle } = useContext(VehicleContext);
  const { selectedPlanets } = useContext(PlanetContext);
  const { token } = useContext(TokenContext);

  const [answer, setAnswer] = useState({});

  const body = {
    token: token,
    planet_names: Array.from(selectedPlanets.values()).map((value) => value[0]),
    vehicle_names: Array.from(selectedVehicle.values()),
  };

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.post(
          "https://findfalcone.geektrust.com/find",
          body,
          { headers }
        );

        setAnswer(data.data);
      } catch (error) {
        console.warn(error.message);
      }
    };

    getData();
  }, []);

  console.log(answer);

  return (
    <>
      {answer.status === "success" ? (
        <>
          <div>
            Sucess! Congratulations on Finding Falcone King Shan is mightly
            pleased.
          </div>

          <div>Planet found: {answer.planet_name}</div>
        </>
      ) : (
        <>
          <div>Failed</div>
          <div>Please try again</div>
        </>
      )}
    </>
  );
};

export default Result;
