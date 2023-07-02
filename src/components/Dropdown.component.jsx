import { useContext, useState } from "react";
import { PlanetContext } from "../contexts/planet.context";
import "./Dropdown.styles.css";

const Dropdown = ({ display }) => {
  const [visible, setVisible] = useState(false);
  const { planets, displayMap, setDisplayMap } = useContext(PlanetContext);

  const handleClick = (option) => {
    let newOptionValue = new Map(displayMap);
    newOptionValue.set(display, Object.values(option));

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
          {displayMap.get(display)[0]}
        </div>

        <div className="option-value">
          {visible &&
            planets?.map((option) => {
              let found = false;
              Array.from(displayMap.keys()).map(function (currentDisplay) {
                if (displayMap.get(currentDisplay)[0] === option.name) {
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
