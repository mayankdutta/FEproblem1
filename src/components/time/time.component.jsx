import { useContext } from "react";
import { VehicleContext } from "../../contexts/vehicle.context";

const Time = () => {
  const { totalTime } = useContext(VehicleContext);

  return (
    <>
      <div>Time taken: {totalTime}</div>
    </>
  );
};

export default Time;
