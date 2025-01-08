import { Text } from "@/components/text/text";
import { gabarito } from "@/utils/fonts";
import React, { useState, useEffect } from "react";
import styles from "./banner-name.module.css";
import { motion, AnimatePresence } from "framer-motion";
import data from "./personal-info.json";

const BannerName = () => {
  return (
    <AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={styles.nameContainer}
      >
        <Text.Title
          tag="h1"
          fontWeight="bold"
          fontFamily=""
          fontSize="92px"
          className={`${gabarito.className} ${styles.name}`}
        >
          {data.firstname.toUpperCase()}
        </Text.Title>
      </motion.div>
    </AnimatePresence>
  );
};

export default BannerName;
