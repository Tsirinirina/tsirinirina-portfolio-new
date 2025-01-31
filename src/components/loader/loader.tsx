import React from "react";
import styles from "./loader.module.css";
import { BiLoaderCircle } from "react-icons/bi";

interface LoaderProps {
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 16 }) => {
  return (
    <div className={styles.container}>
      <BiLoaderCircle className={styles.loader} size={size} />
    </div>
  );
};

export default Loader;
