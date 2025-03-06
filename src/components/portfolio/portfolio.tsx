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

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <NavbarUi />
      {/* Main Content */}
      <main className={styles.main}>
        <section className={styles.banner} id="banner">
          <JobTitle />
          <BannerName />
          <div className={styles.scrollDownContainer}>
            <ScrollDown />
          </div>
        </section>
        <SkillsContainer />
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
