import { AnimatePresence, motion } from "framer-motion";
import Certificate from "../certificate/certificate";
import Language from "../language/language";
import styles from "./certificat-container.module.css";

const CertificatsContainer = () => {
  return (
    <section id="myCertificates" className={`${styles.container}`}>
      <motion.div
        initial={{ opacity: 0, scale: 1.1, y: -50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.8,
        }}
        viewport={{ once: true, amount: 0.3 }} // Déclenchement unique quand 30% du composant est visible
        className={styles.nameContainer}
      >
        <Certificate />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.1, y: -50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.8,
        }}
        viewport={{ once: true, amount: 0.3 }} // Déclenchement unique quand 30% du composant est visible
        className={styles.nameContainer}
      >
        <Language />
      </motion.div>
    </section>
  );
};

export default CertificatsContainer;
