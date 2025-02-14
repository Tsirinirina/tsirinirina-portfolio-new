import Flag from "@/components/icons/flag.name";
import styles from "./language.list.module.css";
import data from "./skills.json";
import {} from "react-icons";
const LanguageList = () => {
  return (
    <div className={styles.content}>
      {data.languageSkills.map((i, _index) => (
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
