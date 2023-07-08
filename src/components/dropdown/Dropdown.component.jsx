import { useContext, useState } from "react";
import { PlanetContext } from "../../contexts/planet.context";
import "./Dropdown.styles.css";

const Dropdown = ({ display }) => {
  const [visible, setVisible] = useState(false);
  const { planets, displayMap, setDisplayMap } = useContext(PlanetContext);
  const [inputValue, setInputValue] = useState("");

  const handleClick = (option) => {
    let newOptionValue = new Map(displayMap);
    newOptionValue.set(display, Object.values(option));

    setDisplayMap(newOptionValue);
    setVisible(!visible);
    setInputValue("");
  };

  const handleReset = () => {
    let newOptionValue = new Map(displayMap);
    newOptionValue.set(display, ["Select ..."]);

    setDisplayMap(newOptionValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getInputList = () => {
    return planets.filter((planet) =>
      planet.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  return (
    <>
      <div className={"options"}>
        <h3>{display}</h3>
        <span>
          <input
            placeholder={displayMap.get(display)[0]}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
          />
          <button onClick={handleReset}>X</button>
        </span>

        <div className="option-value">
          {visible &&
            getInputList().map((option) => {
              let found = false;
              Array.from(displayMap.keys()).map(function (currentDisplay) {
                if (displayMap.get(currentDisplay)[0] === option.name) {
                  found = true;
                }
              });

              if (found) {
                return (
                  <div key={option.name} className={"option hidden"}>
                    {option.name}
                  </div>
                );
              } else {
                return (
                  <div
                    key={option.name}
                    className={"option"}
                    onMouseDown={() => {
                      handleClick(option);
                    }}
                  >
                    {option.name}
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
