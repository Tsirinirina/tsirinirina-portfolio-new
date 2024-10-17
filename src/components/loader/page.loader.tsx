import React from "react";
import styles from "./page.loader.module.css";
import { BiLoaderCircle } from "react-icons/bi";

const PageLoader = () => {
  return (
    <div className={styles.container}>
      <BiLoaderCircle className={styles.loader} size={40} />
    </div>
  );
};

export default PageLoader;
