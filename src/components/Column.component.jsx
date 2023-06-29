import Dropdown from "./Dropdown.component";
import List from "./List.component";

const Column = ({ display, options, setOptions, list, setList }) => {
  return (
    <div>
      <Dropdown display={display} options={options} setOptions={setOptions} />
      <List listName ={display} list={list} setList={setList} />
    </div>
  );
};

export default Column;
