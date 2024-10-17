import Portfolio from "@/components/portfolio/portfolio";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Portfolio />
      </main>
    </div>
  );
}
