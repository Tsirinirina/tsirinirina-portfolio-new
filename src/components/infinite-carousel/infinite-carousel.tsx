import { useEffect, useRef } from "react";
import styles from "./infinite-carousel.module.css"; // Pour ajouter des styles CSS
import LogoTechno from "../logo-techno/logo-techno";
import { Skill } from "@/services/skills/skills";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface InfiniteCarouselProps {
  items: Skill[];
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ items }) => {
  return (
    <div className={styles.card3dContainer}>
      <div
        className={styles.card3d}
        style={{ "--item-count": items.length } as any}
      >
        {items.map((item, index) => (
          <motion.div
            // whileHover={{ scale: 1.2 }}
            // whileTap={{ scale: 0.9 }}
            key={`icon_motion_${index}`}
            style={{ "--index": index } as any}
            className={styles.item}
          >
            <LogoTechno techno={item.iconName} size={46} colorized={true} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
