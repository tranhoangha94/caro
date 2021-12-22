export const checkThang = (
  matrix: Array<Array<Number>>,
  y: number,
  x: number
) => {
  return (
    matrix[y][x] !== 0 &&
    matrix[y][x] === matrix[y + 1][x] &&
    matrix[y][x] === matrix[y + 2][x] &&
    matrix[y][x] === matrix[y + 3][x] &&
    matrix[y][x] === matrix[y + 4][x]
  );
};

export const checkNgang = (
  matrix: Array<Array<Number>>,
  y: number,
  x: number
) => {
  return (
    matrix[y][x] !== 0 &&
    matrix[y][x] === matrix[y][x + 1] &&
    matrix[y][x] === matrix[y][x + 2] &&
    matrix[y][x] === matrix[y][x + 3] &&
    matrix[y][x] === matrix[y][x + 4]
  );
};

export const checkCheoChinh = (
  matrix: Array<Array<Number>>,
  y: number,
  x: number
) => {
  return (
    matrix[y][x] !== 0 &&
    matrix[y][x] === matrix[y + 1][x + 1] &&
    matrix[y][x] === matrix[y + 2][x + 2] &&
    matrix[y][x] === matrix[y + 3][x + 3] &&
    matrix[y][x] === matrix[y + 4][x + 4]
  );
};

export const checkCheoPhu = (
  matrix: Array<Array<Number>>,
  y: number,
  x: number
) => {
  return (
    matrix[y][x] !== 0 &&
    matrix[y][x] === matrix[y + 1][x - 1] &&
    matrix[y][x] === matrix[y + 2][x - 2] &&
    matrix[y][x] === matrix[y + 3][x - 3] &&
    matrix[y][x] === matrix[y + 4][x - 4]
  );
};

export const checkWin = (matrix: Array<Array<Number>>) => {
  let res = false;
  for (let i = 0; i < matrix.length - 4; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (checkThang(matrix, i, j)) {
        return true;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length - 4; j++) {
      if (checkThang(matrix, i, j)) {
        return true;
      }
    }
  }

  for (let i = 0; i < matrix.length - 4; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length - 4; j++) {
      if (checkCheoChinh(matrix, i, j)) {
        return true;
      }
    }
  }

  for (let i = 0; i < matrix.length - 4; i++) {
    let row = matrix[i];
    for (let j = 4; j < row.length; j++) {
      if (checkCheoChinh(matrix, i, j)) {
        return true;
      }
    }
  }
  return res;
};
