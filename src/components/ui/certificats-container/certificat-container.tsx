import { AnimatePresence, motion } from "framer-motion";
import Certificate from "../certificate/certificate";
import Language from "../language/language";
import styles from "./certificat-container.module.css";
import { Certificate as CertificateType } from "@/services/certificate/certificat";
import { Skill } from "@/services/skills/skills";
import { Language as LanguageType } from "@/services/language/language";

interface CertificateContainerProps {
  certificate: CertificateType[];
  language: LanguageType[];
}

const CertificatsContainer: React.FC<CertificateContainerProps> = ({
  certificate,
  language,
}) => {
  return (
    <section id="myCertificates" className={`${styles.container}`}>
      <Certificate data={certificate} />
      <Language data={language} />
    </section>
  );
};

export default CertificatsContainer;
