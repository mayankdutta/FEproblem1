import { useState } from "react";
import "./Dropdown.styles.css";

const Dropdown = ({
  display,
  options,
  setOptions,
  displayMap,
  setDisplayMap,
}) => {
  const [visible, setVisible] = useState(false);

  const handleClick = (option) => {
    let newOptionValue = new Map(displayMap);
    newOptionValue.set(display, option.name);

    setDisplayMap(newOptionValue);
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
          {displayMap.get(display)}
        </div>

        <div className="option-value">
          {visible &&
            options?.map((option) => {
              let found = false;
              Array.from(displayMap.keys()).map(function (currentDisplay) {
                if (displayMap.get(currentDisplay) === option.name) {
                  found = true;
                }
              });

              return found ? (
                <div key={option.name} className={"option hidden"}>
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
