import styles from "./scroll-down.module.css";

const ScrollDown = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <div className={styles.scroll}></div>
      </button>
      <div className={styles.chevrons}>
        <div className={styles.chevron}></div>
        <div className={styles.chevron}></div>
      </div>
    </div>
  );
};

export default ScrollDown;
