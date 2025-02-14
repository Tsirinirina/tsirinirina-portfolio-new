import { FlagNameList } from "@/utils/flag.name.list";
import MDGFlag from "./mgd.flag";
import USAFlag from "./usa.flag";
import FRFlag from "./fr.flag";

const Flag: React.FC<{ children: string }> = ({ children }) => {
  switch (children) {
    case FlagNameList.USA:
      return <USAFlag />;
    case FlagNameList.FR:
      return <FRFlag />;
    case FlagNameList.MDG:
      return <MDGFlag />;
    default:
      return <>Flag</>;
  }
};

export default Flag;
