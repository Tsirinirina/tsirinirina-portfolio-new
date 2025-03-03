import styles from "./citation.module.css";

interface CitationProps {
  children: string;
}

const Citation: React.FC<CitationProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Citation;
