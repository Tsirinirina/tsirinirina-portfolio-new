"use client";

import styles from "./portfolio.module.css";
import NavbarUi from "../ui/navbar/navbar.ui";
import BannerName from "../ui/name/banner-name";
import JobTitle from "../ui/jobtitle/jobtitle";
import ScrollDown from "../scroll-down/scroll-down";
import CodeTest from "./code.test";
import SectionContainer from "../ui/section-container/section-container";
import SkillsContainer from "../ui/skills-container/skills-container";
import ScrollDown2 from "../scroll-down-2/scroll-down-2";

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
        {/* <SectionContainer id="myskills" title="Compétences">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          totam?
        </SectionContainer> */}
        <SkillsContainer />
        <section
          id="mywork"
          style={{
            height: "300px",
            width: "100%",
            margin: "30px 0",
            background: "#37334957",
          }}
        >
          PROJECTS RÉALISÉ
        </section>
        <section
          id="professional-expertise"
          style={{
            height: "300px",
            width: "100%",
            margin: "30px 0",
            background: "#37334957",
          }}
        >
          PROFESSIONAL EXPERTISE
        </section>
        <section
          id="formation"
          style={{
            height: "300px",
            width: "100%",
            margin: "30px 0",
            background: "#37334957",
          }}
        >
          FORMATION
        </section>
        <section
          id="contact-form"
          style={{
            height: "300px",
            width: "100%",
            margin: "30px 0",
            background: "#37334957",
          }}
        >
          FORMULAIRE DE CONTACT
        </section>
        <section
          id="about"
          style={{
            height: "300px",
            width: "100%",
            margin: "30px 0",
            background: "#37334957",
          }}
        >
          À Propos de Moi
        </section>
      </main>
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
