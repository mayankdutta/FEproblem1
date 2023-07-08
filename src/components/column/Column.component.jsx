import Dropdown from "../dropdown/Dropdown.component";
import List from "../list/List.component";

const Column = ({ display }) => {
  return (
    <div>
      <Dropdown display={display} />
      <List display={display} />
    </div>
  );
};

export default Column;
