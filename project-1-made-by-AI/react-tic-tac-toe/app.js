const e = React.createElement;

function Square({ value, onClick }) {
  return e(
    'button',
    { className: 'square', onClick },
    value
  );
}

function Board({ squares, onClick }) {
  return e('div', { className: 'board' },
    squares.map((sq, i) => e(Square, { key: i, value: sq, onClick: () => onClick(i) }))
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Game() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  function handleClick(i) {
    const sq = squares.slice();
    if (calculateWinner(sq) || sq[i]) return;
    sq[i] = xIsNext ? 'X' : 'O';
    setSquares(sq);
    setXIsNext(!xIsNext);
  }

  function reset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next: ${xIsNext ? 'X' : 'O'}`;

  return e('div', { className: 'app' },
    e('div', { className: 'header' },
      e('div', null, e('div', { className: 'title' }, 'React Tic‑Tac‑Toe'), e('div', { className: 'status' }, status)),
      e('div', null, e('button', { className: 'btn', onClick: reset }, 'Restart'))
    ),
    e(Board, { squares, onClick: handleClick }),
    e('div', { className: 'footer' }, 'Built with plain React + CDN — click a square to play')
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(Game));
