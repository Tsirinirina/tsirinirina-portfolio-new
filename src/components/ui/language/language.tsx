import { Text } from "@/components/text/text";
import styles from "./language.module.css";
import data from "./skills.json";

interface LanguageProps {}

const Language: React.FC<LanguageProps> = ({}) => {
  return (
    <div className={`${styles.container} ${styles.bordered}`} id="myLanguages">
      <Text.Title
        tag="h1"
        fontWeight="bold"
        fontFamily={""}
        fontSize="36px"
        className={`lato ${styles.title}`}
      >
        Language Skills
      </Text.Title>
      {data.languageSkills.map((i) => (
        <li>{i.name}</li>
      ))}
    </div>
  );
};

export default Language;
