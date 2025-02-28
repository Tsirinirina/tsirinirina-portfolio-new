import styles from "./experience.module.css";
import { FaPlus, FaMinus, FaLocationArrow } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AnimatePresence, motion, useInView } from "framer-motion";
import LogoTechno from "@/components/logo-techno/logo-techno";
import { useState } from "react";

interface ExperienceProps {
  position: string;
  startDate: string;
  endDate: string;
  companyName: string;
  location: string;
  contractType: string;
  descriptions: string;
  missions: string[];
  technoList: string[];
  defaultCollapsed: boolean;
}

const Experience: React.FC<ExperienceProps> = ({
  position,
  startDate,
  endDate,
  companyName,
  contractType,
  descriptions,
  location,
  missions,
  technoList,
  defaultCollapsed,
}) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(defaultCollapsed);
  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <motion.div
      // whileHover={{ scale: 1.001 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={styles.container}
    >
      <div
        className={`${styles.header} ${
          isCollapse ? styles.active : styles.disable
        } lexend-deca`}
        onClick={handleCollapse}
      >
        <div className={styles.right}>
          <div className={styles.position}>{position}</div>
          <div className={styles.date}>
            {startDate} - {endDate}
          </div>
        </div>
        <div className={styles.collapse}>
          {isCollapse ? (
            <FaMinus
              size={12}
              className={styles.collapseIcon}
              onClick={handleCollapse}
            />
          ) : (
            <FaPlus
              size={12}
              className={styles.collapseIcon}
              onClick={handleCollapse}
            />
          )}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isCollapse && (
          <motion.div
            className={styles.body}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className={`${styles.company} source-code`}>
              <div className={styles.companyName}>{companyName}</div>
              <div className={styles.companyLocation}>
                <FaLocationDot size={16} className={styles.locationIcon} />
                <span>{location}</span>
              </div>
              <div className={styles.contract}>{contractType}</div>
            </div>
            <div className={styles.description}>{descriptions}</div>
            <ul className={styles.missions}>
              {missions.map((item, _i) => (
                <li className={styles.mission} key={`mission_${_i}`}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.technoList}>
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Experience;
