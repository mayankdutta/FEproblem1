import { useContext, useState } from "react";
import { PlanetContext } from "../../contexts/planet.context";
import { VehicleContext } from "../../contexts/vehicle.context";
import "./List.styles.css";

const List = ({ display }) => {
  const [checked, setChecked] = useState([]);

  const { selectedPlanets } = useContext(PlanetContext);
  const {
    selectedVehicle,
    setSelectedVehicle,
    vehicles,
    setVehicles,
    totalTime,
    setTimeTaken,
  } = useContext(VehicleContext);

  console.log(selectedPlanets);

  const handleClick = (name) => {
    const PlanetDistance = selectedPlanets.get(display)[1];

    let newTotalTime = totalTime;
    let newList = vehicles.map((l) => ({
      ...l,
      display: display,
    }));

    if (checked.length == 0) {
      for (let i of newList) {
        if (i.name === name) {
          i.total_no -= 1;
          newTotalTime += PlanetDistance / i.speed;
        }
      }
    } else {
      for (let i of newList) {
        if (i.name === checked.name && i.display === checked.display) {
          i.total_no += 1;
          newTotalTime -= PlanetDistance / i.speed;
        }
        if (i.name === name && i.display === display) {
          i.total_no -= 1;
          newTotalTime += PlanetDistance / i.speed;
        }
      }
    }

    let newSelectedVehicle = new Map(selectedVehicle);
    newSelectedVehicle.set(display, name);

    setChecked({ name: name, display: display });
    setVehicles(newList);
    setTimeTaken(newTotalTime);
    setSelectedVehicle(newSelectedVehicle);

    console.log("new time: ", newTotalTime);
  };

  return (
    <div>
      {selectedPlanets.get(display)[0] != "Select ..." &&
        vehicles?.map((val) => {
          const uniqueID = display + val.name;

          return val.max_distance < selectedPlanets.get(display)[1] ||
            val.total_no === 0 ? (
            <div key={uniqueID}>
              <input type="radio" name={display} id={uniqueID} disabled />
              <label htmlFor={uniqueID} className="hidden">
                {val.name + " ( "}{" "}
                {val.total_no -
                  (checked[checked.length - 1] === val.name ? 1 : 0)}{" "}
                {" )"}
              </label>
            </div>
          ) : (
            <div key={uniqueID}>
              <input
                type="radio"
                name={display}
                id={uniqueID}
                onClick={() => {
                  handleClick(val.name);
                }}
              />

              <label htmlFor={uniqueID}>
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
