"use client";

import styles from "./portfolio.module.css";
import NavbarUi from "../ui/navbar/navbar.ui";
import BannerName from "../ui/name/banner-name";
import JobTitle from "../ui/jobtitle/jobtitle";
import ScrollDown from "../scroll-down/scroll-down";
import SkillsContainer from "../ui/skills-container/skills-container";
import { LastWork } from "../ui/last-work/last-work";
import lastWork from "./last-work.json";
import Espacer from "../espacer/espacer";
import CertificatsContainer from "../ui/certificats-container/certificat-container";
import ProjectsContainer from "../ui/projects-container/projects.container";
import ExperienceContainer from "../ui/experience-container/experience-container";
import InfoContainer from "../ui/info-container/info-container";
import { useEffect, useState } from "react";
import { Personal } from "@/services/personal/personal";
import { GetPersonalData } from "@/services/personal/personal.service";
import PageLoader from "../loader/page.loader";
import ClassicLoader from "../loader/classic.loader";
import { GetAllCertificate } from "@/services/certificate/certificate.service";
import { Certificate } from "@/services/certificate/certificat";
import InfiniteScrollCarousel from "../infinite-scroll/infinite-scroll-carousel";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoPython,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoAngular,
} from "react-icons/io5";
import InfiniteCarousel from "../infinite-carousel/infinite-carousel";
import { Speciality } from "@/services/speciality/speciality";
import { GetAllSpeciality } from "@/services/speciality/speciality.service";
import Carousel from "../carousel/carousel";
import { Skill } from "@/services/skills/skills";
import { GetAllSkill } from "@/services/skills/skills.service";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [personalData, setPersonalData] = useState<Personal>(Object());
  const [certificateData, setCertificateData] = useState<Certificate[]>([]);
  const [specialityData, setSpecialityData] = useState<Speciality[]>([]);
  const [skillsData, setSkillsData] = useState<Skill[]>([]);
  const items = [
    <IoLogoJavascript key="js" className="text-yellow-400" size={62} />,
    <IoLogoReact key="react" className="text-blue-400" size={62} />,
    <IoLogoPython key="python" className="text-green-500" size={62} />,
    <IoLogoNodejs key="node" className="text-green-600" size={62} />,
    <IoLogoHtml5 key="html" className="text-orange-500" size={62} />,
    <IoLogoCss3 key="css" className="text-blue-500" size={62} />,
    <IoLogoAngular key="angular" className="text-red-500" size={62} />,
  ];

  const getAllData = async () => {
    try {
      const personalData = await GetPersonalData();
      setPersonalData(personalData);
      const certificateData = await GetAllCertificate();
      setCertificateData(certificateData);
      const specialityData = await GetAllSpeciality();
      setSpecialityData(specialityData);
      const skillData = await GetAllSkill();
      setSkillsData(skillData);
      if (personalData && certificateData) setIsLoading(false);
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
              <JobTitle title={personalData.jobTitle} />
              <BannerName name={personalData.firstname} />
              <div className={styles.scrollDownContainer}>
                <ScrollDown />
              </div>
            </section>
            <SkillsContainer data={specialityData} />
            <InfiniteCarousel items={skillsData} />
            {/* <Carousel /> */}
            {/* <InfiniteScrollCarousel
              items={items}
              autoScroll={true}
              scrollSpeed={2000}
              className="h-32"
            /> */}
            <LastWork
              projectTitle={lastWork.title}
              projetDescription={lastWork.description}
              technoList={lastWork.technoList}
              clientInformation={lastWork.clientInformation}
              publishDate={lastWork.publishDate}
              startDate={lastWork.startDate}
            />
            <Espacer size="lg" />
            <CertificatsContainer />
            <Espacer size="lg" />
            <ProjectsContainer />
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
