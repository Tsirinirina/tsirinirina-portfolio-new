import styles from "./scroll-down.module.css";

const ScrollDown = () => {
  return (
    <button className={styles.btn}>
      <div className={styles.scroll}> </div>
    </button>
  );
};

export default ScrollDown;
