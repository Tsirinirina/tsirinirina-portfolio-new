import styles from "./navbar.ui.module.css";
import NameUi from "../name/name.ui";
import Navlinks from "../navlinks/navlinks.ui";
import useScrollPosition from "@/hooks/scroll-position";
import {} from "framer-motion";

const NavbarUi = () => {
  return (
    <nav className={`${styles.nav}`}>
      {/* <NameUi /> */}
      <Navlinks />
    </nav>
  );
};

export default NavbarUi;
