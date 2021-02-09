export function showAvailablePositions(fromX, fromY, toX, toY, arrMatrix, id) {

  if (!anyValidMovesLeft(arrMatrix)) return false;

  const diffX = toX - fromX;
  const diffY = toY - fromY;
  const emptySlot = arrMatrix[toX][toY] === 0;

  const validMove = (diffX === -2 && Math.abs(diffY) === 0 && arrMatrix[fromX - 1][fromY] === 2)
    || (diffX === 2 && Math.abs(diffY) === 0 && arrMatrix[fromX + 1][fromY] === 2)
    || (Math.abs(diffX) === 0 && diffY === 2 && arrMatrix[fromX][fromY + 1] === 2)
    || (Math.abs(diffX) === 0 && diffY === -2 && arrMatrix[fromX][fromY - 1] === 2);

  return validMove && emptySlot;
}

export function anyValidMovesLeft(arrMatrix) {
  for (let i = 0; i < arrMatrix.length; i++) {
    for (let j = 0; j < arrMatrix.length; j++) {
      if (arrMatrix[i][j] === 2) {
        if (i - 1 >= 0 && i - 2 >= 0) {
          if (arrMatrix[i - 1][j] === 2 && arrMatrix[i - 2][j] === 0) return true;
        }
        if (i + 1 < arrMatrix.length && i + 2 < arrMatrix.length) {
          if (arrMatrix[i + 1][j] === 2 && arrMatrix[i + 2][j] === 0) return true;
        }
        if (j - 1 >= 0 && j - 2 >= 0) {
          if (arrMatrix[i][j - 1] === 2 && arrMatrix[i][j - 2] === 0) return true;
        }
        if (j + 1 < arrMatrix.length && j + 2 < arrMatrix.length) {
          if (arrMatrix[i][j + 1] === 2 && arrMatrix[i][j + 2] === 0) return true;
        }
      }
    }
  }
  return false;
}

export function getCurrentMarblesCount(arrMatrix) {
  let counter = 0;
  for (let i = 0; i < arrMatrix.length; i++) {
    for (let j = 0; j < arrMatrix.length; j++) {
      if (arrMatrix[i][j] === 2) counter++;
    }
  }
  return counter;
}
