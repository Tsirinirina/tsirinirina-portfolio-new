import { useSession } from "next-auth/react";
import React from "react";
import styles from "./menu-wrapper.module.css";
import { Menu } from "../menu/menu";

const MenuWrapper = () => {
  const { data, status } = useSession();
  if (status === "authenticated") {
    return (
      <div className={styles.menuBox}>
        <Menu />
      </div>
    );
  }
};

export default MenuWrapper;
