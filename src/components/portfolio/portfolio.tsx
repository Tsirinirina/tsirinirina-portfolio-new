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
import { gabarito, inconsolate, space_mono } from "@/utils/fonts";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import BannerName from "../ui/name/banner-name";

export default function Portfolio() {
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Répéter l'animation
    tl.to(titleRef.current, {
      scale: 1.1,
      y: -20,
      ease: "bounce.out",
      duration: 1,
    }).to(titleRef.current, {
      scale: 1,
      y: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 0.8,
    });
  }, []);

  return (
    <div className={styles.container}>
      <NavbarUi />
      {/* Main Content */}
      <main className={styles.main}>
        <section className={styles.banner}>
          <BannerName />
          <Text.Title
            tag="h1"
            fontWeight="bold"
            fontFamily={""}
            fontSize="26px"
          >
            <Typewriter
              typingSpeed={80}
              className={`${inconsolate.className} ${styles.jobtitle}`}
            >
              {data.jobTitle.toUpperCase()}
            </Typewriter>
          </Text.Title>
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
