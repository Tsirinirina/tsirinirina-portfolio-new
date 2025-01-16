import { Text } from "@/components/text/text";
import styles from "./section-container.module.css";

interface SectionContainerProps {
  children: any;
  id: string;
  title: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  title,
}) => {
  return (
    <div className={styles.container} id={id}>
      <Text.Title
        tag="h1"
        fontWeight="bold"
        fontFamily={""}
        fontSize="36px"
        className={`gabarito ${styles.title}`}
      >
        {title}
      </Text.Title>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default SectionContainer;
