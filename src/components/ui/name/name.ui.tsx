import useScrollPosition from "@/hooks/scroll-position";
import styles from "./name.ui.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Text } from "@/components/text/text";
import Typewriter from "@/components/typewriter/typewriter";

const NameUi = () => {
  const scrollPosition = useScrollPosition();

  return (
    <AnimatePresence>
      {scrollPosition < 200 && (
        <motion.div
          className={styles.nameUiContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={`space-mono ${styles.name}`}>
            <Typewriter typingSpeed={80} fontFamily="inconsolate">
              Tsirinirina Patrick.
            </Typewriter>
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NameUi;
