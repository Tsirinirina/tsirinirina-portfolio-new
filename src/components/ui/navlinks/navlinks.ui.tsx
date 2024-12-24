import Link from "next/link";
import styles from "./navlinks.ui.module.css";
const Navlinks = () => {
  return (
    <div className={styles.container}>
      <Link href="#about" className={styles.navLink}>
        About
      </Link>
      <Link href="#contact" className={styles.navLink}>
        Contact
      </Link>
    </div>
  );
};

export default Navlinks;
