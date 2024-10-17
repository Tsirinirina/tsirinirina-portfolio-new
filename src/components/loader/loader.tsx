import React from "react";
import styles from "./loader.module.css";
import { BiLoaderCircle } from "react-icons/bi";

const Loader = () => {
  return (
    <div className={styles.container}>
      <BiLoaderCircle className={styles.loader} size={16} />
    </div>
  );
};

export default Loader;
