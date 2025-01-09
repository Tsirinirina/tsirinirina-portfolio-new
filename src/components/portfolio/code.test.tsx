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

export default function CodeTest() {
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
    <div>
      {/* About Me */}
      <section id="about" className={styles.section}>
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
      </section>

      {/* Academic Background */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <GraduationCap className={styles.sectionIcon} />
          <span>Academic Background</span>
        </h2>
        <ul>
          <li>B.Sc. in Computer Science, Tech University (2018-2022)</li>
          <li>M.Sc. in Artificial Intelligence, AI Institute (2022-2024)</li>
        </ul>
      </section>

      {/* Skills in Development */}
      <section className={styles.section}>
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
      </section>

      {/* Completed Projects */}
      <section className={styles.section}>
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
      </section>
    </div>
  );
}
