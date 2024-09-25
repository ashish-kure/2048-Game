import React from "react";
import styles from "../Styles/Game2048.module.css";
import { KEYS } from "./Game2048";
import {
  IoIosArrowBack,
  IoIosArrowUp,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";

// Icons Components
const ICONS = {
  LEFT: <IoIosArrowBack className="action-button-icon" />,
  UP: <IoIosArrowUp className="action-button-icon" />,
  DOWN: <IoIosArrowDown className="action-button-icon" />,
  RIGHT: <IoIosArrowForward className="action-button-icon" />,
};

const ActionButtons = ({ moveCells }) => {
  return (
    <section className={styles["action-button-section"]}>
      {Object.entries(KEYS).map(([direction, value], ind) => {
        return (
          <button
            key={ind}
            onClick={() => moveCells(value)}
            className={styles["action-buttons"]}
          >
            {ICONS[direction]}
          </button>
        );
      })}
    </section>
  );
};

export default ActionButtons;
