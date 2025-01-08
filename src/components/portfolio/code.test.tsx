"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Building,
} from "lucide-react";
import styles from "./portfolio.module.css";
import NavbarUi from "../ui/navbar/navbar.ui";
import NameUi from "../ui/name/name.ui";
import { Text } from "../text/text";
import CodeblockText from "../code-block-text/code-block-text";
import data from "./personal-info.json";
import Typewriter from "../typewriter/typewriter";
import TypewriterCode from "../typewriter/typewriter-code";

export default function Portfolio() {
  const codeString = `
  import SyntaxHighlighter from 'react-syntax-highlighter';
  import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

  const Component = () => {
    const codeString = '(num) => num + 1';
    return (
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    );
};
  `;

  const da = data.description.toString();

  return (
    <div className={styles.container}>
      {/* Header */}
      {/* <header className={styles.header}> */}
      {/* <Image
          src="https://tsirinirina-patrick.netlify.app/public/images/bg.png"
          alt="Space background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        /> */}
      <NavbarUi />
      {/* <h1 className={styles.headerTitle}>Bienvenue dans mon univers</h1> */}
      {/* </header> */}

      <div>
        <Text.Title tag="h1">Titre h1</Text.Title>
        <Text.Title tag="h2">Titre h2</Text.Title>
        <Text.Title tag="h3">Titre h3</Text.Title>
        <Text.Subtitle>Sous-titre</Text.Subtitle>
        <Text.Description>
          Description, Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit aut et, nesciunt dignissimos quaerat iste tempore dolorem
          repellendus laudantium corporis.
        </Text.Description>
        <Text.Description fontStyle="italic">
          Description, Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit aut et, nesciunt dignissimos quaerat iste tempore dolorem
          repellendus laudantium corporis.
        </Text.Description>
        <Text.Text>
          Text Simple, Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Sequi, placeat.
        </Text.Text>
        <Text.Title tag="h1" fontWeight="bold" fontFamily={""}>
          <Typewriter typingSpeed={80}>
            {`${data.lastname} ${data.firstname}`}
          </Typewriter>
        </Text.Title>

        <CodeblockText language="html">{`<h1 class>${data.firstname}</h1>`}</CodeblockText>
        <Typewriter typingSpeed={80} cursor>
          Bonjour, ceci est une animation de type "machine à écrire" en React.
        </Typewriter>
        <div></div>
        <TypewriterCode typingSpeed={40} cursor={true}>
          {`${da}`}
        </TypewriterCode>
      </div>

      {/* Main Content */}
      <main className={styles.main}>
        {/* About Me */}
        {/* <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <User className={styles.sectionIcon} />
            <span>About Me</span>
          </h2>
          <p>
            I'm a passionate developer with a love for creating innovative
            solutions. My journey in the tech universe has led me to explore
            various galaxies of programming, always seeking new challenges and
            opportunities to grow.
          </p>
        </section> */}

        {/* Academic Background */}
        {/* <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <GraduationCap className={styles.sectionIcon} />
            <span>Academic Background</span>
          </h2>
          <ul>
            <li>B.Sc. in Computer Science, Tech University (2018-2022)</li>
            <li>M.Sc. in Artificial Intelligence, AI Institute (2022-2024)</li>
          </ul>
        </section> */}

        {/* Skills in Development */}
        {/* <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Code className={styles.sectionIcon} />
            <span>Skills in Development</span>
          </h2>
          <ul className={styles.skillsList}>
            <li className={styles.skillItem}>JavaScript</li>
            <li className={styles.skillItem}>React</li>
            <li className={styles.skillItem}>Node.js</li>
            <li className={styles.skillItem}>Python</li>
            <li className={styles.skillItem}>Docker</li>
            <li className={styles.skillItem}>AWS</li>
          </ul>
        </section> */}

        {/* Completed Projects */}
        {/* <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Briefcase className={styles.sectionIcon} />
            <span>Completed Projects</span>
          </h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Project 1"
                width={400}
                height={200}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>AI-Powered Chat Bot</h3>
                <p className={styles.projectTech}>React, Node.js, TensorFlow</p>
                <Link href="#" className={styles.projectLink}>
                  View Project
                </Link>
              </div>
            </div>
            <div className={styles.projectCard}>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Project 2"
                width={400}
                height={200}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>E-commerce Platform</h3>
                <p className={styles.projectTech}>Next.js, GraphQL, MongoDB</p>
                <Link href="#" className={styles.projectLink}>
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* Training */}
        {/* <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Award className={styles.sectionIcon} />
            <span>Training</span>
          </h2>
          <ul>
            <li>Advanced React Patterns Workshop (2023)</li>
            <li>Machine Learning Bootcamp (2022)</li>
            <li>AWS Certified Solutions Architect (2021)</li>
          </ul>
        </section> */}

        {/* Professional Background */}
        {/* <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Building className={styles.sectionIcon} />
            <span>Professional Background</span>
          </h2>
          <ul>
            <li>
              <h3>Senior Developer at TechCorp</h3>
              <p>2022 - Present</p>
              <p>
                Leading a team of developers in creating innovative web
                applications.
              </p>
            </li>
            <li>
              <h3>Full Stack Developer at StartupX</h3>
              <p>2020 - 2022</p>
              <p>
                Developed and maintained multiple client projects using modern
                web technologies.
              </p>
            </li>
          </ul>
        </section> */}

        {/* Contact */}
        {/* <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p>
            Feel free to reach out to me at:{" "}
            <a
              href="mailto:parajaonarison@gmail.com"
              className={styles.projectLink}
            >
              parajaonarison@gmail.com
            </a>
          </p>
        </section> */}
      </main>

      {/* Footer */}
      {/* <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Tsirinirina RAJAONARISON. All rights
          reserved.
        </p>
      </footer> */}
    </div>
  );
}
