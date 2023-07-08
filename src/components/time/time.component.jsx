import { useContext, useState } from "react";
import { VehicleContext } from "../../contexts/vehicle.context";

const Time = () => {
  const { vehicles } = useContext(VehicleContext);
  const [timeTaken, setTimeTaken] = useState(0);

  console.log('vehicles: ', vehicles);
  return (
    <>
      <div>Time taken</div>
      <div>{timeTaken}</div>
    </>
  );
};

export default Time;
