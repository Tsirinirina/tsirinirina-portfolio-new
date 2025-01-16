import Link from "next/link";
import styles from "./navlinks.ui.module.css";
import { motion, AnimatePresence } from "framer-motion";
import UseWindowSize from "@/hooks/window.size";

const Navlinks = () => {
  const windowsWidthSize = UseWindowSize().width;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -50 }}
        whileHover={{ scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
          duration: 0.8,
        }}
        className={`${styles.container}  neonBlue source-code`}
      >
        <Link
          href="#"
          onClick={() => handleScroll("myskills")}
          className={styles.navLink}
        >
          /Compétences
        </Link>
        <Link
          href="#"
          onClick={() => handleScroll("mywork")}
          className={styles.navLink}
        >
          /Projets
        </Link>
        <Link
          href="#"
          onClick={() => handleScroll("professional-expertise")}
          className={styles.navLink}
        >
          /Expérience
        </Link>
        <Link
          href="#"
          onClick={() => handleScroll("about")}
          className={styles.navLink}
        >
          {windowsWidthSize > 736 ? "/Qui Suis-Je ?" : "/?"}
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navlinks;

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};
