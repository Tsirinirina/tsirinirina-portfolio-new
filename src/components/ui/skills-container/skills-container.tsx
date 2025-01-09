import styles from "./skills-container.module.css";

interface SkillsContainerProps {
  children: any;
  id: string;
}

const SkillsContainer: React.FC<SkillsContainerProps> = ({ children, id }) => {
  return (
    <div className={styles.container} id={id}>
      {children}
    </div>
  );
};

export default SkillsContainer;
