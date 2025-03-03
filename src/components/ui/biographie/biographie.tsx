import styles from "./biographie.module.css";

interface BiographieProps {
  bio: string;
}

const Biographie: React.FC<BiographieProps> = ({ bio }) => {
  return <div className={styles.container}>{bio}</div>;
};

export default Biographie;
