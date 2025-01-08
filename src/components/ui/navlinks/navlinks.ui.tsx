import Link from "next/link";
import styles from "./navlinks.ui.module.css";
const Navlinks = () => {
  return (
    <div className={`${styles.container}  neonBlock`}>
      <Link href="#about" className={styles.navLink}>
        / about
      </Link>
      <Link href="#contact" className={styles.navLink}>
        / contact
      </Link>
      <Link href="#contact" className={styles.navLink}>
        / lien 2
      </Link>
      <Link href="#contact" className={styles.navLink}>
        / lien 3
      </Link>
    </div>
  );
};

export default Navlinks;
