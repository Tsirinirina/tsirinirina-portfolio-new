import Portfolio from "@/components/portfolio/portfolio";
import styles from "./page.module.css";
import NavbarUi from "@/components/ui/navbar/navbar.ui";
import ScrollUp from "@/components/scroll-up/scroll-up";
import VantaBackground from "@/components/vantabg/vantabg";
import { tsParticles } from "tsparticles-engine";
import Particule from "@/components/particules/particules";

export default function Home() {
  return (
    <div className={`${styles.page} lato`}>
      <main
        className={styles.main}
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
        }}
      >
        <Portfolio />
      </main>
      {/* <ScrollUp /> */}
      {/* <VantaBackground /> */}
      <Particule />
    </div>
  );
}
