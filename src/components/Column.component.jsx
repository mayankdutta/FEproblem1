import Dropdown from "./Dropdown.component";
import List from "./List.component";

const Column = ({ display }) => {
  return (
    <div>
      <Dropdown display={display} />
      <List display={display} />
    </div>
  );
};

export default Column;
