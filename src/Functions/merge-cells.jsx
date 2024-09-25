import { KEYS } from "../Components/Game2048";
import { slideVertical, slideHorizontal } from "./slide-cells";

const mergeCells = (cells, keyCode) => {
  const newCells = JSON.parse(JSON.stringify(cells));
  const length = newCells.length;

  let score = 0;

  switch (keyCode) {
    case KEYS.UP: {
      for (let col = 0; col < length; col++) {
        let merged = [];

        for (let row = 1; row < length; row++) {
          score += slideVertical(col, row, length, newCells, merged, "up");
        }
      }
      break;
    }

    case KEYS.DOWN: {
      for (let col = 0; col < length; col++) {
        let merged = [];

        for (let row = length - 2; row >= 0; row--) {
          score += slideVertical(col, row, length, newCells, merged, "down");
        }
      }
      break;
    }

    case KEYS.LEFT: {
      for (let row = 0; row < length; row++) {
        let merged = [];

        for (let col = 1; col < length; col++) {
          score += slideHorizontal(row, col, length, newCells, merged, "left");
        }
      }
      break;
    }

    case KEYS.RIGHT: {
      for (let row = 0; row < length; row++) {
        let merged = [];

        for (let col = length - 2; col >= 0; col--) {
          score += slideHorizontal(row, col, length, newCells, merged, "right");
        }
      }
      break;
    }

    default:
      break;
  }

  return [newCells, score];
};

export default mergeCells;
