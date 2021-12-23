import { useEffect, useState } from "react";
import { checkWin } from "./helper";
import { Board, Cell, Reset, Row } from "./Map.style";

type MapIProps = {};

const initMatrix = (lenght: number): Array<Array<Number>> => {
  const matrix: Array<Array<Number>> = new Array<Array<Number>>();
  for (let i = 0; i < lenght; i++) {
    let row = new Array<Number>();
    for (let j = 0; j < lenght; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
};

type Player = 1 | 2;

const MapGame: React.FC<MapIProps> = (props: MapIProps) => {
  const [score1, setScore1] = useState<number>(0);
  const [score2, setScore2] = useState<number>(0);
  const [lenght, setLenght] = useState<number>(20);
  const [matrix, setMatrix] = useState<Array<Array<Number>>>(
    initMatrix(lenght)
  );
  const [last, setLast] = useState<[number, number]>([-1, -1]);
  const [turn, setTurn] = useState<Player>(1);

  const danh = (x: number, y: number) => {
    if (matrix[y][x] === 0) {
      setMatrix((prevMat) => {
        prevMat[y][x] = turn;
        return prevMat;
      });
      setTurn(turn === 1 ? 2 : 1);
    }
    setLast([y, x]);
  };

  useEffect(() => {
    if (checkWin(matrix, last[0], last[1])) {
      window.alert("Player " + turn + " Win");
    }
  }, [last, matrix]);

  const resetBoard = () => {
    setMatrix(initMatrix(lenght));
    setTurn(1);
  };

  return (
    <Board>
      <h1>{`${score1} - ${score2}`}</h1>
      <Reset onClick={resetBoard}>Reset</Reset>
      {matrix.map((row, y) => (
        <Row>
          {row.map((cell, x) => (
            <Cell key={`${x}-${y}`} onClick={() => danh(x, y)}>
              {matrix[y][x] === 1 ? (
                <h3 className="blue">X</h3>
              ) : matrix[y][x] === 2 ? (
                <h3 className="red">0</h3>
              ) : (
                ""
              )}
            </Cell>
          ))}
        </Row>
      ))}
    </Board>
  );
};

export default MapGame;
