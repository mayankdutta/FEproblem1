import "./Dropdown.styles.css";

import { useContext, useState } from "react";
import { PlanetContext } from "../../contexts/planet.context";

const Dropdown = ({ display }) => {
  const { planets, selectedPlanets, setSelectedPlanets } =
    useContext(PlanetContext);

  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = (option) => {
    let newOptionValue = new Map(selectedPlanets);
    newOptionValue.set(display, Object.values(option));

    setSelectedPlanets(newOptionValue);
    setVisible(!visible);
    setInputValue("");
  };

  const handleReset = () => {
    setSelectedPlanets(new Map(selectedPlanets).set(display, ["Select ..."]));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filteredList = () => {
    return planets.filter((planet) =>
      planet.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  console.log(selectedPlanets);

  return (
    <>
      <div className={"options"}>
        <h3>{display}</h3>
        <span>
          <input
            placeholder={selectedPlanets.get(display)[0]}
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
            filteredList().map((option) => {
              let alreadyUsed = Array.from(selectedPlanets.keys()).find(
                (selectedPlanet) =>
                  selectedPlanets.get(selectedPlanet)[0] === option.name
              );

              return alreadyUsed ? (
                <div key={option.name} className={"option hidden"}>
                  {option.name}
                </div>
              ) : (
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
            })}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
