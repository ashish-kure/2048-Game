// For Up and Down Moves
const slideVertical = (...rest) => {
  let [col, row, length, newCells, merged, isUpOrDown] = rest;
  let score = 0;

  const comparingFactor = isUpOrDown === "up" ? -1 : 1;

  if (newCells[row][col] !== 0) {
    let newRow = row;

    while (
      (isUpOrDown === "up" ? newRow > 0 : newRow < length - 1) &&
      (newCells[newRow + comparingFactor][col] === 0 ||
        (newCells[newRow + comparingFactor][col] === newCells[newRow][col] &&
          !merged.includes(newRow + comparingFactor)))
    ) {
      const currentRow = newRow;
      const comparingRow = newRow + comparingFactor;

      if (
        newCells[comparingRow][col] === newCells[currentRow][col] &&
        !merged.includes(comparingRow)
      ) {
        newCells[comparingRow][col] *= 2;
        newCells[currentRow][col] = 0;

        score += newCells[comparingRow][col];
        merged.push(comparingRow);
        break;
      }

      newCells[comparingRow][col] = newCells[currentRow][col];
      newCells[currentRow][col] = 0;
      isUpOrDown === "up" ? newRow-- : newRow++;
    }
  }

  return score;
};

// For Left and Right Moves
const slideHorizontal = (...rest) => {
  let [row, col, length, newCells, merged, isLeftOrRight] = rest;
  let score = 0;

  const comparingFactor = isLeftOrRight === "left" ? -1 : 1;

  if (newCells[row][col] !== 0) {
    let newCol = col;

    while (
      (isLeftOrRight === "left" ? newCol > 0 : newCol < length - 1) &&
      (newCells[row][newCol + comparingFactor] === 0 ||
        (newCells[row][newCol + comparingFactor] === newCells[row][newCol] &&
          !merged.includes(newCol + comparingFactor)))
    ) {
      const currentCol = newCol;
      const comparingCol = newCol + comparingFactor;

      if (
        newCells[row][comparingCol] === newCells[row][currentCol] &&
        !merged.includes(comparingCol)
      ) {
        newCells[row][comparingCol] *= 2;
        newCells[row][currentCol] = 0;

        score += newCells[row][comparingCol];
        merged.push(comparingCol);
        break;
      }

      newCells[row][comparingCol] = newCells[row][currentCol];
      newCells[row][currentCol] = 0;
      isLeftOrRight === "left" ? newCol-- : newCol++;
    }
  }

  return score;
};

export { slideVertical, slideHorizontal };
