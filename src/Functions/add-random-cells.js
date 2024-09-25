const addRandomCells = (cells) => {
  const getRandomCell = () => (Math.random() < 0.1 ? 4 : 2);
  const getRandomIndex = (length) => Math.floor(Math.random() * length);

  const emptyCells = [];

  cells.forEach((row, rowInd) => {
    row.forEach((cell, colInd) => {
      if (cell === 0) {
        emptyCells.push({ row: rowInd, col: colInd });
      }
    });
  });

  if (emptyCells.length === 0) {
    return;
  }

  const { row, col } = emptyCells[getRandomIndex(emptyCells.length)];
  const newCells = [...cells];
  newCells[row][col] = getRandomCell();

  return newCells;
};

export default addRandomCells;
