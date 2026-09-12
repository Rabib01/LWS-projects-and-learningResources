import { useState } from "react";
import Square from "./Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board() {
  const [squaresValues, setSquaresValue] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squaresValues);
  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = "NextPlayer : " + ` ${xIsNext ? "X" : "O"}`;
  }

  //   const winner = calculateValue(squaresValues);

  function handleClick(i) {
    // guard clause to prevent rewriting each box multiple times if it was already written onces
    // second condition of the guard clause = return the winner if the winner exists or reutn null which is not rendered in react - this works because of or statement
    if (squaresValues[i] || calculateWinner(squaresValues)) return;

    const nextSquares = [...squaresValues];
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquaresValue(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="mt-5 mb-5 text-3xl w-screen flex justify-center items-center">
        <p className="w-[500px] rounded-sm border-b-4 border-r-4 border-[#A98273] bg-amber-100 shadow-[8px_5px_0_#A98273] items-center justify-center flex">
          {status}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 ml-3  ">
        <Square
          squareValue={squaresValues[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          squareValue={squaresValues[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          squareValue={squaresValues[2]}
          onSquareClick={() => handleClick(2)}
        />
        <Square
          squareValue={squaresValues[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          squareValue={squaresValues[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          squareValue={squaresValues[5]}
          onSquareClick={() => handleClick(5)}
        />
        <Square
          squareValue={squaresValues[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          squareValue={squaresValues[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          squareValue={squaresValues[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </>
  );
}

export default function Game() {
  // child level e state maintain na kore parent level e state maintain korbo
  // parent level e data access rakhbo and then share them to the child level as props
  return (
    <>
      <div>
        <Board />
      </div>
      <div>
        <ol>{/**TBD */}</ol>
      </div>
    </>
  );
}
