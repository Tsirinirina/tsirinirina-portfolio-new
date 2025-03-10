"use client";

import { Text } from "@/components/text/text";
import styles from "./skills-container.module.css";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Typewriter from "@/components/typewriter/typewriter";
import TypewriterCode from "@/components/typewriter/typewriter-code";
import LogoTechno from "@/components/logo-techno/logo-techno";
import { TechnoList } from "@/utils/techno.list";
import { Speciality } from "@/services/speciality/speciality";

interface SkillsContainerProps {
  data: Speciality[];
}

const SkillsContainer: React.FC<SkillsContainerProps> = ({ data }) => {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);

  const isFrontendInView = useInView(frontendRef, {
    once: true,
    margin: "-50px",
  });
  const isBackendInView = useInView(backendRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <div className={styles.container} id="myskills">
      <Text.Title
        tag="h1"
        fontWeight="bold"
        fontFamily={""}
        fontSize="36px"
        className={`lato ${styles.title}`}
      >
        Mes Compétences
      </Text.Title>

      <div className={`${styles.content} ${styles.bordered}`}>
        {/* Frontend Dev */}
        <div className={styles.skillsBlock} ref={frontendRef}>
          <div className={styles.skillsTitle}>
            <div className={styles.icon}>
              <LogoTechno techno={TechnoList.REACTJS} size={62} />
            </div>
            <div className={`${styles.label} lexend-deca`}>{data[0].name}</div>
          </div>
          <motion.div
            className={`${styles.body} lato`}
            initial={{ opacity: 0, y: -50 }}
            animate={
              isBackendInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className={styles.leftDeco}>
              <motion.div
                className={styles.bar}
                initial={{ height: 0 }}
                animate={isBackendInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            <p>{data[0].description}</p>
          </motion.div>
        </div>

        {/* Backend Dev */}
        <div className={styles.skillsBlock} ref={backendRef}>
          <div className={styles.skillsTitle}>
            <LogoTechno techno={TechnoList.NODEJS} size={62} />
            <div className={`${styles.label} lexend-deca `}>{data[1].name}</div>
          </div>
          <motion.div
            className={`${styles.body} lato`}
            initial={{ opacity: 0, y: -50 }}
            animate={
              isBackendInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className={styles.leftDeco}>
              <motion.div
                className={styles.bar}
                initial={{ height: 0 }}
                animate={isBackendInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            <p>{data[1].description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
