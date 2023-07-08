import { useContext, useState } from "react";
import { PlanetContext } from "../../contexts/planet.context";
import { VehicleContext } from "../../contexts/vehicle.context";
import "./List.styles.css";

const List = ({ display }) => {
  const [checked, setChecked] = useState([]);

  const { displayMap } = useContext(PlanetContext);
  const { vehicles, setVehicles } = useContext(VehicleContext);

  const handleClick = (name) => {
    let newList = vehicles.map((l) => ({
      ...l,
      display: display,
    }));

    if (checked.length == 0) {
      for (let i of newList) {
        if (i.name === name) {
          i.total_no -= 1;
        }
      }
    } else {
      for (let i of newList) {
        if (i.name === checked.name && i.display === checked.display) {
          i.total_no += 1;
        }
        if (i.name === name && i.display === display) {
          i.total_no -= 1;
        }
      }
    }

    setChecked({ name: name, display: display });
    setVehicles(newList);
  };

  return (
    <div>
      {displayMap.get(display)[0] != "Select ..." &&
        vehicles?.map((val) => {
          const uniqueID = display + val.name;

          return val.max_distance < displayMap.get(display)[1] ||
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
