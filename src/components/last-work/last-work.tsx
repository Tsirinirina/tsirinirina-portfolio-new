import { Text } from "../text/text";
import styles from "./last-work.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LastWorkProps {}

export const LastWork: React.FC<LastWorkProps> = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <div className={styles.container} id="lastWork">
      <motion.div
        className={``}
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
        voluptatem sequi corrupti, dignissimos iure eum voluptates dolores
        explicabo, sit eligendi numquam tempore reiciendis distinctio non odio,
        pariatur at tempora earum ducimus? Dolorem dolore, ratione minima hic
        libero voluptatem tempora numquam inventore blanditiis quos! Sint
        placeat voluptate magni quisquam quis nobis asperiores sapiente, ipsam
        nesciunt obcaecati pariatur minima id, fugit saepe, neque ad dolores
        animi aut ratione illo ipsa libero incidunt.
      </div>
    </div>
  );
};
