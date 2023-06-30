import { useState } from "react";
import "./List.styles.css";

const List = ({ list, setList, display }) => {
  const [checked, setChecked] = useState([]);

  const handleClick = (name) => {
    let newList = [...list];

    if (checked.length == 0) {
      for (let i of newList) {
        if (i.name === name) {
          i.total_no -= 1;
        }
      }
    } else {
      for (let i of newList) {
        if (i.name === checked) {
          i.total_no += 1;
        }
        if (i.name === name) {
          i.total_no -= 1;
        }
      }
    }

    setChecked(name);
    setList(newList);
  };

  return (
    <div>
      {list?.map((val) => {
        const uniqueID = display + val.name;
        console.log(
          "debugging: ",
          checked[checked.length - 1] === val.name ? 1 : 0
        );
        console.log("checked array: ", checked);
        return val.total_no === 0 ? (
          <div key={uniqueID}>
            <input type="radio" name={display} id={uniqueID} />
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
