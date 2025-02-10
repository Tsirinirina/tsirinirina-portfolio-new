import { Text } from "@/components/text/text";
import styles from "./language.module.css";
import data from "./skills.json";
import { AnimatePresence, motion } from "framer-motion";
import { LiaCertificateSolid } from "react-icons/lia";

interface LanguageProps {}

const Language: React.FC<LanguageProps> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1, y: -50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={`${styles.container} ${styles.bordered}`}
      id="myLanguages"
    >
      <div className={styles.header}>
        <LiaCertificateSolid size={64} className={styles.icon} />
        <Text.Title
          tag="h1"
          fontWeight="bold"
          fontFamily={""}
          fontSize="28px"
          className={`lexend-deca ${styles.title}`}
        >
          Langues
        </Text.Title>
      </div>
      <div className={`lato ${styles.content}`}>
        {data.languageSkills.map((i, _index) => (
          <li key={`language_${_index}`}>{i.name}</li>
        ))}
      </div>
    </motion.div>
  );
};

export default Language;
