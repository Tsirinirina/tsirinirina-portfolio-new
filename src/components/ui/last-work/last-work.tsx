import { Text } from "@/components/text/text";
import styles from "./last-work.module.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { IoLogoReact, IoLogoWordpress } from "react-icons/io5";
import { TechnoList } from "@/utils/techno.list";
import LogoTechno from "@/components/logo-techno/logo-techno";
import PreviewLink from "@/components/preview-link/preview-link";

interface LastWorkProps {
  projectTitle: string;
  projetDescription: string;
  clientInformation?: string;
  technoList: string[];
  startDate?: string;
  publishDate?: string;
}

export const LastWork: React.FC<LastWorkProps> = ({
  projectTitle,
  projetDescription,
  technoList,
  clientInformation,
  startDate,
  publishDate,
}) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <div className={styles.container} id="lastWork">
      <motion.div
        className={styles.containerTitle}
        initial={{ lineHeight: "0px" }}
        animate={isInView ? { lineHeight: "50px" } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        ref={titleRef}
      >
        <Text.Title
          tag="h1"
          fontWeight="bold"
          fontFamily={""}
          fontSize="62px"
          className={`gabarito ${styles.title}`}
        >
          Dernier projet
        </Text.Title>
      </motion.div>

      <div className={styles.content}>
        <div className={styles.work}>
          <Text.Subtitle
            fontWeight="bold"
            fontFamily={""}
            fontSize="28px"
            className={`lexend-deca ${styles.subtitle}`}
          >
            {projectTitle}
          </Text.Subtitle>
          <div className={styles.info}>
            <div className={styles.clientInfo}>{clientInformation}</div>
            <div className={styles.date}>{publishDate}</div>
          </div>
        </div>

        <Text.Description
          fontWeight="400"
          fontFamily={""}
          fontSize="16px"
          className={`lato ${styles.description}`}
        >
          {projetDescription}
        </Text.Description>
        <div className={styles.footer}>
          <div className={styles.techno}>
            {technoList.map((item, _i) => (
              <LogoTechno
                techno={item}
                size={36}
                colorized={true}
                key={`${_i}_icons`}
              />
            ))}
          </div>
          <div className={styles.workLink}>
            <PreviewLink previewUrl="https://preview-ap-solutions.itras.mg/" />
          </div>
        </div>
      </div>
    </div>
  );
};
