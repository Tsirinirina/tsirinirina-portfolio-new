import styles from "./navbar.ui.module.css";
import NameUi from "../name/name.ui";
import Navlinks from "../navlinks/navlinks.ui";

const NavbarUi = () => {
  return (
    <nav className={styles.nav}>
      <NameUi />
      <Navlinks />
    </nav>
  );
};

export default NavbarUi;
