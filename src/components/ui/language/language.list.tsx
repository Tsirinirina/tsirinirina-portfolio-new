import Flag from "@/components/icons/flag.name";
import styles from "./language.list.module.css";
import {} from "react-icons";
import { Language } from "@/services/language/language";

interface LanguageListProps {
  data: Language[];
}

const LanguageList: React.FC<LanguageListProps> = ({ data }) => {
  return (
    <div className={styles.content}>
      {data.map((i, _index) => (
        <li key={`language_${_index}`} className={`${styles.list}`}>
          <div className={`${styles.flag}`}>
            <Flag>{i.flagName}</Flag>
          </div>
          <div className={`${styles.text}`}>
            <div className={`lexend-deca ${styles.name}`}>{i.name}</div>
            <div className={`${styles.ranking}`}>{i.ranking}</div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default LanguageList;
