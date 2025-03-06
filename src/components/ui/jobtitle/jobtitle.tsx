"use client";
import Typewriter from "@/components/typewriter/typewriter";
import styles from "./jobtitle.module.css";
import { useEffect, useState } from "react";
import { Personal } from "@/services/personal/personal";
import { GetPersonalData } from "@/services/personal/personal.service";

const JobTitle = () => {
  const [personalData, setPersonalData] = useState<Personal>();
  const getPersonalData = async () => {
    try {
      const data = (await GetPersonalData()) as Personal;
      setPersonalData(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      return { title: "Erreur de chargement" };
    }
  };
  useEffect(() => {
    getPersonalData();
  }, []);

  return (
    <Typewriter
      typingSpeed={80}
      className={""}
      fontFamily="inconsolate"
      fontSize="28px"
      fontWeight="400"
    >
      {personalData?.jobTitle}
    </Typewriter>
  );
};

export default JobTitle;
