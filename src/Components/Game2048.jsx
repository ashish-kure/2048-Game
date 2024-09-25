import React, { useEffect, useState } from "react";
import Record from "./Record";
import GameBoard from "./GameBoard";
import ActionButtons from "./ActionButtons";
import NewGame from "./NewGame";
import addRandomCells from "../Functions/add-random-cells";
import mergeCells from "../Functions/merge-cells";
import styles from "../Styles/Game2048.module.css";

const initialCells = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

export const KEYS = {
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
};

const Game2048 = () => {
  const copyCells = structuredClone(initialCells);

  // States
  const [cells, setCells] = useState(addRandomCells(copyCells));
  const [isGameOver, setIsGameOver] = useState(false);
  const [record, setRecord] = useState({
    score: 0,
    highScore: localStorage.getItem("high-score") || 0,
  });

  const checkGameOver = () => {
    for (const direction in KEYS) {
      const [mergedCells] = mergeCells(cells, KEYS[direction]);

      if (JSON.stringify(cells) !== JSON.stringify(mergedCells)) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(
    () => localStorage.setItem("high-score", record.highScore),
    [record.highScore]
  );

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case KEYS.UP:
        moveCells(KEYS.UP);
        break;

      case KEYS.DOWN:
        moveCells(KEYS.DOWN);
        break;

      case KEYS.LEFT:
        moveCells(KEYS.LEFT);
        break;

      case KEYS.RIGHT:
        moveCells(KEYS.RIGHT);
        break;

      default:
        break;
    }
  };

  const moveCells = (direction) => {
    if (checkGameOver()) {
      return setIsGameOver(true);
    }

    const [resultantCells, mergedScore] = mergeCells(cells, direction);
    const newCells = addRandomCells(resultantCells);

    if (mergedScore) {
      setRecord((prevRecord) => {
        const scoreSum = prevRecord.score + mergedScore;

        return {
          score: scoreSum,
          highScore: Math.max(prevRecord.highScore, scoreSum),
        };
      });
    }

    newCells && setCells(newCells);
  };

  const handleNewGame = () => {
    const copyCells = structuredClone(initialCells);

    setCells(addRandomCells(copyCells));
    setRecord({ ...record, score: 0 });
    setIsGameOver(false);
  };

  return (
    <div className={styles["main-container"]}>
      <main className={styles["game-2048"]}>
        <Record score={record.score} highScore={record.highScore} />
        <GameBoard cells={cells} isGameOver={isGameOver} />
        <ActionButtons moveCells={moveCells} />
        <NewGame onClick={handleNewGame} />
      </main>
    </div>
  );
};

export default Game2048;
