import React from "react";
import styles from "../Styles/Game2048.module.css";

const GameBoard = ({ cells, isGameOver }) => {
  return (
    <section className={styles["game-board"]}>
      {cells.map((row, rowInd) => {
        return (
          <div key={rowInd} className={styles["row"]}>
            {row.map((cell, cellInd) => {
              return (
                <div
                  key={cellInd}
                  className={`${styles["element"]} ${
                    styles[`element-${cell}`]
                  }`}
                >
                  {cell !== 0 && cell}
                </div>
              );
            })}
          </div>
        );
      })}

      {isGameOver && <div className={styles["game-over"]}>Game Over!</div>}
    </section>
  );
};

export default GameBoard;
