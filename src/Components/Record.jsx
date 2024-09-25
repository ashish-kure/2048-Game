import React from "react";
import styles from "../Styles/Game2048.module.css";

const Record = ({ score, highScore }) => {
  return (
    <section className={styles["record-section"]}>
      <div className={styles["score"]}>
        Score <span className={styles["digit"]}>{score}</span>
      </div>
      <div className="high-score">
        Best <span className={styles["digit"]}>{highScore}</span>
      </div>
    </section>
  );
};

export default Record;
