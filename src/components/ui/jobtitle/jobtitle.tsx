import { Text } from "@/components/text/text";
import Typewriter from "@/components/typewriter/typewriter";
import React from "react";
import data from "./personal-info.json";
import styles from "./jobtitle.module.css";
import clsx from "clsx";
const JobTitle = () => {
  return (
    <Typewriter
      typingSpeed={80}
      className={""}
      fontFamily="inconsolate"
      fontSize="28px"
      fontWeight="400"
    >
      {data.jobTitle}
    </Typewriter>
  );
};

export default JobTitle;
