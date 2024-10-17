import Link from "next/link";
import styles from "./menu.module.css";
import {
  LuHome,
  LuLayoutGrid,
  LuClock,
  LuMail,
  LuCalendar,
} from "react-icons/lu";

interface MenuProps {
  // currentIndex: number;
  isAuthenticated?: boolean;
}

export function Menu({ isAuthenticated = false }: MenuProps) {
  return (
    <div className={styles.linkContainer}>
      <Link className={styles.linkItem} href={"/"}>
        <LuHome size={24} />
        <span>Accueil</span>
      </Link>
      <Link className={styles.linkItem} href={"/service"}>
        <LuLayoutGrid size={24} />
        <span>Services</span>
      </Link>
      <Link className={styles.linkItem} href={"/waiting"}>
        <LuClock size={24} />
        <span>En attente</span>
      </Link>
      <Link className={styles.linkItem} href={"/message"}>
        <LuMail size={24} />
        <span>Message</span>
      </Link>
      <Link className={styles.linkItem} href={"/appointment"}>
        <LuCalendar size={24} />
        <span>Rendez-vous</span>
      </Link>
    </div>
  );
}
