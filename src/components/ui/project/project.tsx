import styles from "./projet.module.css";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LogoTechno from "@/components/logo-techno/logo-techno";
import PreviewLink from "@/components/preview-link/preview-link";
import { Text } from "@/components/text/text";
import Image from "next/image";
import placeholderImage from "../../../../public/placeholder.png";
import UseWindowSize from "@/hooks/window.size";
import { FaRegClipboard } from "react-icons/fa";
import { LuClipboardCheck } from "react-icons/lu";
interface ProjectProps {
  title: string;
  shortTitle: string;
  description: string;
  projectLink: string;
  projectVersion?: string;
  status: string;
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
  projectLink,
  projectVersion,
  status,
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
  const [linkCopied, setLinkCopied] = useState<string>("");
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setLinkCopied(text);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      if (linkCopied) {
        setLinkCopied("");
      }
    }, 5000);
  }, [linkCopied]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`${size === "MD" ? styles.md : styles.lg} ${styles.container}`}
      id={`projet-${title}`}
    >
      <div className={styles.imageContainer}>
        <Image
          src={placeholderImage.src}
          width={windowsSize > 736 ? 320 : 400}
          height={210}
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
          textLength={31}
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
                  size={28}
                  colorized={true}
                  key={`${_i}_icons`}
                />
              </motion.div>
            ))}
          </div>
          <div className={styles.workLink}>
            <div className={styles.link}>
              <a className={`lato`} href={projectLink}>
                {projectLink}
              </a>
              {linkCopied !== "" ? (
                <LuClipboardCheck size={18} className={styles.copy} />
              ) : (
                <FaRegClipboard
                  size={18}
                  onClick={() => copyToClipboard(projectLink)}
                  className={styles.copy}
                />
              )}
            </div>
            <PreviewLink previewUrl="https://preview-ap-solutions.itras.mg/" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
