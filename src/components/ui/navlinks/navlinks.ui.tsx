import Link from "next/link";
import styles from "./navlinks.ui.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Navlinks = () => {
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
        className={`${styles.container}  neonBlock`}
      >
        <Link href="#about" className={styles.navLink}>
          / about
        </Link>
        <Link href="#contact" className={styles.navLink}>
          / contact
        </Link>
        <Link href="#contact" className={styles.navLink}>
          / lien 2
        </Link>
        <Link href="#contact" className={styles.navLink}>
          / lien 3
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navlinks;
