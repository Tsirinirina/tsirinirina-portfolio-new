import { AnimatePresence, motion } from "framer-motion";
import Certificate from "../certificate/certificate";
import Language from "../language/language";
import styles from "./certificat-container.module.css";

const CertificatsContainer = () => {
  return (
    <section id="myCertificates" className={`${styles.container}`}>
      <Certificate />
      <Language />
    </section>
  );
};

export default CertificatsContainer;
