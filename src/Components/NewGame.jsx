import React from "react";
import styles from "../Styles/Game2048.module.css";

const NewGame = ({ onClick }) => {
  return (
    <section className={styles["new-game-section"]}>
      <button onClick={onClick} className="new-game-button">
        New Game
      </button>
    </section>
  );
};

export default NewGame;
