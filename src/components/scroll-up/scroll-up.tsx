"use client";
import { useEffect, useState } from "react";
import styles from "./scroll-up.module.css";
import { motion } from "framer-motion";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Détecte la position de défilement
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Remonte en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      className={`${styles.scrollUpButton} ${isVisible ? styles.show : ""}`}
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      ↑
    </motion.div>
  );
};

export default ScrollUp;
