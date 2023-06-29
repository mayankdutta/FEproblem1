import { useState } from "react";
import "./Dropdown.styles.css";

const Dropdown = ({ display, options, setOptions }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("Select ...");

  const handleClick = (option) => {
    let newOptions = [];
    for (let i of options) {
      if (i.name === option.name) {
        newOptions.push({ ...i, hidden: true });
      } else {
        newOptions.push({ ...i, hidden: i.hidden || false });
      }
    }

    setOptions(newOptions);

    setValue(option.name);
    setVisible(!visible);
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className={"options"}>
        <h3>{display}</h3>
        <div className="option-header" onClick={() => handleVisible()}>
          {value}
        </div>
        <div className="option-value">
          {visible &&
            options?.map((option) => {
              return option.hidden && option.hidden === true ? (
                <div
                  key={option.name}
                  className={"option hidden"}
                >
                  {option.name}
                </div>
              ) : (
                <div
                  key={option.name}
                  className={"option"}
                  onClick={() => handleClick(option)}
                >
                  {option.name}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
