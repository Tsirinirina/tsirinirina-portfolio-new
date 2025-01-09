import { Text } from "@/components/text/text";
import { gabarito } from "@/utils/fonts";
import React, { useState, useEffect } from "react";
import styles from "./banner-name.module.css";
import { motion, AnimatePresence } from "framer-motion";
import data from "./personal-info.json";
import UseWindowSize from "@/hooks/window.size";

const BannerName = () => {
  const windowsWidthSize = UseWindowSize().width;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -50 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
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
          className={`${gabarito.className} ${styles.name}`}
        >
          {data.firstname.toUpperCase()}.
        </Text.Title>
      </motion.div>
    </AnimatePresence>
  );
};

export default BannerName;
