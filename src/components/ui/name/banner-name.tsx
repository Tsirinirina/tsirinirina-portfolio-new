import { Text } from "@/components/text/text";
import styles from "./banner-name.module.css";
import { motion, AnimatePresence } from "framer-motion";
import UseWindowSize from "@/hooks/window.size";

interface BannerNameProps {
  name: string;
}

const BannerName: React.FC<BannerNameProps> = ({ name }) => {
  const windowsWidthSize = UseWindowSize().width;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 1.3, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.3, y: -50 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 5,
          duration: 0.8,
        }}
        className={styles.nameContainer}
      >
        <Text.Title
          tag="h1"
          fontWeight="bold"
          fontFamily=""
          fontSize={
            windowsWidthSize > 736
              ? "92px"
              : windowsWidthSize > 425
              ? "48px"
              : "28px"
          }
          className={`gabarito ${styles.name}`}
        >
          {name && name.toUpperCase()}.
        </Text.Title>
      </motion.div>
    </AnimatePresence>
  );
};

export default BannerName;
