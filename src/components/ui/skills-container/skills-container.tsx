import { Text } from "@/components/text/text";
import styles from "./skills-container.module.css";
import { geistSans } from "@/utils/fonts";

interface SkillsContainerProps {
  id: string;
}

const SkillsContainer: React.FC<SkillsContainerProps> = ({ id }) => {
  return (
    <div className={styles.container} id={id}>
      <Text.Title
        tag="h1"
        fontWeight="bold"
        fontFamily={""}
        fontSize="36px"
        className={`${geistSans.className} ${styles.title}`}
      >
        Mes Compétences
      </Text.Title>

      <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus et veritatis ipsum unde ullam cumque eveniet quaerat.
        Temporibus, accusantium!
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nulla!
      </div>
    </div>
  );
};

export default SkillsContainer;
