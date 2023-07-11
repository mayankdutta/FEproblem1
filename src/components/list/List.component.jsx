import { useContext, useState } from "react";
import { PlanetContext } from "../../contexts/planet.context";
import { VehicleContext } from "../../contexts/vehicle.context";
import "./List.styles.css";

const List = ({ display }) => {
  const [checked, setChecked] = useState([]);

  const { selectedPlanets } = useContext(PlanetContext);
  const {
    selectedVehicle,
    vehicles,
    totalTime,

    setSelectedVehicle,
    setVehicles,
    setTimeTaken,
  } = useContext(VehicleContext);

  const handleClick = (name) => {
    const PlanetDistance = selectedPlanets.get(display)[1];

    let newTotalTime = totalTime;
    let newVehicleList = vehicles.map((l) => ({
      ...l,
      display: display,
    }));

    let isCheckedEmpty = checked.length == 0;

    for (let i of newVehicleList) {
      let firstTimeModification = isCheckedEmpty && i.name === name;

      let modifyPrevState =
        !isCheckedEmpty &&
        i.name === checked.name &&
        i.display === checked.display;

      let modifyCurrState =
        !isCheckedEmpty && i.name === name && i.display === display;

      if (firstTimeModification || modifyCurrState) {
        i.total_no -= 1;
        newTotalTime += PlanetDistance / i.speed;
      }
      if (modifyPrevState) {
        i.total_no += 1;
        newTotalTime -= PlanetDistance / i.speed;
      }
    }

    setSelectedVehicle(new Map(selectedVehicle).set(display, name));

    setChecked({ name: name, display: display });
    setVehicles(newVehicleList);
    setTimeTaken(newTotalTime);
  };

  return (
    <div>
      {selectedPlanets.get(display)[0] != "Select ..." &&
        vehicles?.map((val) => {
          const uniqueID = display + val.name;
          let condition =
            val.max_distance < selectedPlanets.get(display)[1] ||
            val.total_no === 0;

          return (
            <div key={uniqueID}>
              <input
                type="radio"
                name={display}
                id={uniqueID}
                onClick={() => {
                  if (!condition) handleClick(val.name);
                }}
                disabled={condition}
              />

              <label htmlFor={uniqueID} className={condition ? "hidden" : ""}>
                {val.name + " ( "}{" "}
                {val.total_no -
                  (checked[checked.length - 1] === val.name ? 1 : 0)}{" "}
                {" )"}
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default List;
