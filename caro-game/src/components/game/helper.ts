export const checkThang = (
  matrix: Array<Array<Number>>,
  y: number,
  x: number
) => {
  let sum = 1;
  let i = 1;
  while (y + i < matrix.length && matrix[y + i][x] === matrix[y][x]) {
    sum++;
    i++;
  }
  i = 1;
  while (y - i >= 0 && matrix[y - i][x] === matrix[y][x]) {
    sum++;
    i++;
  }
  return sum >= 5;
};

export const checkNgang = (
  matrix: Array<Array<Number>>,
  y: number,
  x: number
) => {
  let sum = 1;
  let i = 1;
  while (x + i < matrix.length && matrix[y][x + i] === matrix[y][x]) {
    sum++;
    i++;
  }
  i = 1;
  while (x - i >= 0 && matrix[y][x - i] === matrix[y][x]) {
    sum++;
    i++;
  }
  return sum >= 5;
};

export const checkCheoChinh = (
  matrix: Array<Array<Number>>,
  y: number,
  x: number
) => {
  let sum = 1;
  let i = 1;
  while (
    y + i < matrix.length &&
    x + i < matrix.length &&
    matrix[y + i][x + i] === matrix[y][x]
  ) {
    sum++;
    i++;
  }
  i = 1;
  while (y - i >= 0 && x - i >= 0 && matrix[y - i][x - i] === matrix[y][x]) {
    sum++;
    i++;
  }
  return sum >= 5;
};

export const checkCheoPhu = (
  matrix: Array<Array<Number>>,
  y: number,
  x: number
) => {
  let sum = 1;
  let i = 1;
  while (
    y + i < matrix.length &&
    x - i >= 0 &&
    matrix[y + i][x - i] === matrix[y][x]
  ) {
    sum++;
    i++;
  }
  i = 1;
  while (
    y - i >= 0 &&
    x + i < matrix.length &&
    matrix[y - i][x + i] === matrix[y][x]
  ) {
    sum++;
    i++;
  }
  return sum >= 5;
};

export const checkWin = (
  matrix: Array<Array<Number>>,
  y: number,
  x: number
) => {
  return (
    x >= 0 &&
    y >= 0 &&
    (checkThang(matrix, y, x) ||
      checkNgang(matrix, y, x) ||
      checkCheoChinh(matrix, y, x) ||
      checkCheoPhu(matrix, y, x))
  );
};
