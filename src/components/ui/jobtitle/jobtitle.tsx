import { Text } from "@/components/text/text";
import Typewriter from "@/components/typewriter/typewriter";
import { geistSans, inconsolate, space_mono } from "@/utils/fonts";
import React from "react";
import data from "./personal-info.json";
import styles from "./jobtitle.module.css";
const JobTitle = () => {
  return (
    <Text.Title
      tag="h1"
      fontWeight="bold"
      fontFamily={""}
      fontSize="26px"
      className={`${inconsolate.className} `}
    >
      <Typewriter
        typingSpeed={80}
        className={`${inconsolate.className}  ${styles.jobtitle}`}
      >
        {data.jobTitle}
      </Typewriter>
    </Text.Title>
  );
};

export default JobTitle;
