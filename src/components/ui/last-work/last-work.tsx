import { Text } from "@/components/text/text";
import styles from "./last-work.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LogoTechno from "@/components/logo-techno/logo-techno";
import PreviewLink from "@/components/preview-link/preview-link";
import { Project } from "@/services/project/project";

interface LastWorkProps {
  data: Project;
}

export const LastWork: React.FC<LastWorkProps> = ({ data }) => {
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
            {data.title}
          </Text.Subtitle>
          <div className={styles.info}>
            <div className={styles.clientInfo}>{data.clientInformation}</div>
            <div className={styles.date}>{data.publishDate}</div>
          </div>
        </div>

        <Text.Description
          fontWeight="400"
          fontFamily={""}
          fontSize="16px"
          className={`lato ${styles.description}`}
        >
          {data.description}
        </Text.Description>
        <div className={styles.footer}>
          <div className={styles.techno}>
            {data.technoList.map((item, _i) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                key={`icon_motion_${_i}`}
              >
                <LogoTechno
                  techno={item}
                  size={36}
                  colorized={true}
                  key={`${_i}_icons`}
                />
              </motion.div>
            ))}
          </div>
          <div className={styles.workLink}>
            <PreviewLink previewUrl={data.link} />
          </div>
        </div>
      </div>
    </div>
  );
};
