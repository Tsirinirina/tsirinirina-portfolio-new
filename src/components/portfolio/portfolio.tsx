"use client";

import styles from "./portfolio.module.css";
import NavbarUi from "../ui/navbar/navbar.ui";
import BannerName from "../ui/name/banner-name";
import JobTitle from "../ui/jobtitle/jobtitle";
import ScrollDown from "../scroll-down/scroll-down";
import SkillsContainer from "../ui/skills-container/skills-container";
import { LastWork } from "../ui/last-work/last-work";
import Espacer from "../espacer/espacer";
import CertificatsContainer from "../ui/certificats-container/certificat-container";
import ProjectsContainer from "../ui/projects-container/projects.container";
import ExperienceContainer from "../ui/experience-container/experience-container";
import InfoContainer from "../ui/info-container/info-container";
import { useEffect, useState } from "react";
import { Personal } from "@/services/personal/personal";
import { GetPersonalData } from "@/services/personal/personal.service";
import ClassicLoader from "../loader/classic.loader";
import { GetAllCertificate } from "@/services/certificate/certificate.service";
import { Certificate } from "@/services/certificate/certificat";
import InfiniteCarousel from "../infinite-carousel/infinite-carousel";
import { Speciality } from "@/services/speciality/speciality";
import { GetAllSpeciality } from "@/services/speciality/speciality.service";
import { Skill } from "@/services/skills/skills";
import { GetAllSkill } from "@/services/skills/skills.service";
import { GetAllProjectData } from "@/services/project/project.service";
import { Project } from "@/services/project/project";
import { Language } from "@/services/language/language";
import { GetAllLanguage } from "@/services/language/language.service";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [personal, setPersonal] = useState<Personal>(Object());
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [specialities, setSpecialities] = useState<Speciality[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);

  const getAllData = async () => {
    try {
      const personalData = await GetPersonalData();
      setPersonal(personalData);
      const certificateData = await GetAllCertificate();
      setCertificates(certificateData);
      const specialityData = await GetAllSpeciality();
      setSpecialities(specialityData);
      const skillsData = await GetAllSkill();
      setSkills(skillsData);
      const projectsData = await GetAllProjectData();
      setProjects(projectsData);
      const languageData = await GetAllLanguage();
      setLanguages(languageData);
      if (
        personalData &&
        certificateData &&
        specialityData &&
        projectsData &&
        skillsData &&
        projectsData &&
        languageData
      )
        setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.error("Erreur lors de la récupération des données :", error);
      return { title: "Erreur de chargement" };
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: isLoading ? "#111827" : "transparent" }}
    >
      <NavbarUi />
      {isLoading && (
        <div className={styles.loadingContainer}>
          <ClassicLoader />
        </div>
      )}
      {!isLoading && (
        <>
          {/* Main Content */}
          <main className={styles.main}>
            <section className={styles.banner} id="banner">
              <JobTitle title={personal.jobTitle} />
              <BannerName name={personal.firstname} />
              <div className={styles.scrollDownContainer}>
                <ScrollDown />
              </div>
            </section>
            <SkillsContainer data={specialities} />
            <InfiniteCarousel items={skills} />
            <LastWork data={projects[0]} />
            <Espacer size="lg" />
            <CertificatsContainer
              certificate={certificates}
              language={languages}
            />
            <Espacer size="lg" />
            <ProjectsContainer data={projects} />
            <Espacer size="lg" />
            <ExperienceContainer />
            <Espacer size="lg" />
          </main>
          <InfoContainer />
        </>
      )}
    </div>
  );
}

{
  /* <Image
          src="https://tsirinirina-patrick.netlify.app/public/images/bg.png"
          alt="Space background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        /> */
}
