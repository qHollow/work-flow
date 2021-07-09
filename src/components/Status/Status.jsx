import { StatusBox } from "./style";
import { color } from "../../styles/colors";

const statusList = {
  completed: color.green,
  ended: color.red,
  active: color.yellow,
  scheduled: color.purple,
  sent: color.green,
  archived: color.red,
  draft: color.yellow,
};

const Normalize = str => { 
  if(!str) return null;

  return str[0].toUpperCase() + str.slice(1);
};

const Status = ({ status = "completed", bradius = "20"}) => {
  return <StatusBox bgcolor={statusList[status]} bradius={bradius}>{Normalize(status)}</StatusBox>;
};

export default Status;
