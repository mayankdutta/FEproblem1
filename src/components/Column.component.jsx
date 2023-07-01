import Dropdown from "./Dropdown.component";
import List from "./List.component";

const Column = ({
  display,
  options,
  setOptions,
  list,
  setList,
  displayMap,
  setDisplayMap,
}) => {
  return (
    <div>
      <Dropdown
        display={display}
        options={options}
        setOptions={setOptions}
        displayMap={displayMap}
        setDisplayMap={setDisplayMap}
      />

      <List
        display={display}
        list={list}
        setList={setList}
        optionValue={displayMap}
      />
    </div>
  );
};

export default Column;
