import React from "react";
import styles from "./page.loader.module.css";
import { BiLoaderCircle } from "react-icons/bi";

interface PageLoaderProps {
  size?: number;
}

const PageLoader: React.FC<PageLoaderProps> = ({ size = 40 }) => {
  return (
    <div className={styles.container}>
      <BiLoaderCircle className={styles.loader} size={size} />
    </div>
  );
};

export default PageLoader;
