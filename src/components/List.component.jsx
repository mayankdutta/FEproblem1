import { useState } from "react";

const List = ({ list, setList, listName }) => {

  const handleClick = (name) => {
    let newList = [];
    for (let i of list) {
      if (i.name === name) {
        newList.push({ ...i, checked: true });
      } else {
        newList.push({ ...i, checked: false });
      }
    }
    setList(newList);
  };
  return (
    <div>
      {list.map((val) => {
        return (
          <div>
            <input
              type="radio"
              key={val.name}
              name={listName}
              id={val.name}
              onClick={() => {
                handleClick(val.name);
              }}
            />
            <label for={val.name}>
              {val.name + " ( "} {val.total_no - (val.checked ? 1 : 0)} {" )"}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default List;
