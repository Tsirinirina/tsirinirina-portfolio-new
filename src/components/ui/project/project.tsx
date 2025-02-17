import styles from "./projet.module.css";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import LogoTechno from "@/components/logo-techno/logo-techno";
import PreviewLink from "@/components/preview-link/preview-link";
import { Text } from "@/components/text/text";
import Image from "next/image";
import placeholderImage from "../../../../public/placeholder.png";
import UseWindowSize from "@/hooks/window.size";

interface ProjectProps {
  title: string;
  shortTitle: string;
  description: string;
  coverImage: string;
  clientInformation?: string;
  technoList: string[];
  technoElements: string[];
  startDate?: string;
  publishDate?: string;
  size: "MD" | "LG";
}

const Project: React.FC<ProjectProps> = ({
  title,
  shortTitle,
  description,
  coverImage,
  clientInformation,
  technoList,
  technoElements,
  startDate,
  publishDate,
  size,
}) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  const windowsSize = UseWindowSize().width;
  return (
    <div
      className={`${size === "MD" ? styles.md : styles.lg} ${styles.container}`}
      id={`projet-${title}`}
    >
      <div className={styles.imageContainer}>
        <Image
          src={placeholderImage.src}
          width={windowsSize > 736 ? 300 : 400}
          height={250}
          alt={""}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.work}>
          <Text.Subtitle
            fontWeight="bold"
            fontFamily={""}
            fontSize="28px"
            className={`lexend-deca ${styles.subtitle}`}
          >
            {title}
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
          {description}
        </Text.Description>
        <div className={styles.footer}>
          <div className={styles.techno}>
            {technoList.map((item, _i) => (
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
            <PreviewLink previewUrl="https://preview-ap-solutions.itras.mg/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
