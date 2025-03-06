import { SocialType } from "@/services/social/social";
import Social from "../social/social";
import styles from "./social-container.module.css";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface SocialContainerProps {
  socials: SocialType[];
}

const SocialContainer: React.FC<SocialContainerProps> = ({ socials }) => {
  return (
    <div className={styles.container}>
      {socials.map((social, _i) => (
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          key={`social_${_i}`}
        >
          <Social type={social.name} link={social.url} />
        </motion.div>
      ))}
    </div>
  );
};

export default SocialContainer;
