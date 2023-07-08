import { useContext } from "react";
import { VehicleContext } from "../../contexts/vehicle.context";

const Time = () => {
  const { totalTime, vehicles } = useContext(VehicleContext);

  console.log("vehicles: ", vehicles);

  return (
    <>
      <div>Time taken</div>
      <div>{totalTime}</div>
    </>
  );
};

export default Time;
