"use client";
import Typewriter from "@/components/typewriter/typewriter";
import styles from "./jobtitle.module.css";
import { useEffect, useState } from "react";
import { Personal } from "@/services/personal/personal";
import { GetPersonalData } from "@/services/personal/personal.service";

interface JobTitleProps {
  title: string;
}

const JobTitle: React.FC<JobTitleProps> = ({ title }) => {
  return (
    <Typewriter
      typingSpeed={80}
      className={""}
      fontFamily="inconsolate"
      fontSize="28px"
      fontWeight="400"
    >
      {title}
    </Typewriter>
  );
};

export default JobTitle;
