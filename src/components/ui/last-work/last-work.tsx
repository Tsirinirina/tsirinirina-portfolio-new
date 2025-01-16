import { Text } from "@/components/text/text";
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
        className={styles.containerTitle}
        initial={{ lineHeight: "0px" }}
        animate={isInView ? { lineHeight: "50px" } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        ref={titleRef}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 6.75L12 12m0 0l-5.25 5.25M12 12l5.25 5.25M12 12L6.75 6.75"
          />
        </svg>

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
