"use client";

import styles from "./portfolio.module.css";
import NavbarUi from "../ui/navbar/navbar.ui";
import BannerName from "../ui/name/banner-name";
import JobTitle from "../ui/jobtitle/jobtitle";
import ScrollDown from "../scroll-down/scroll-down";
import CodeTest from "./code.test";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <NavbarUi />
      {/* Main Content */}
      <main className={styles.main}>
        <section className={styles.banner}>
          <BannerName />
          <JobTitle />
          <div className={styles.scrollDownContainer}>
            <ScrollDown />
          </div>
          <CodeTest />
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
