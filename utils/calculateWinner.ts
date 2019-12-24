export function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let winner = lines.reduce((memo, [a, b, c]) => {
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      memo = squares[a];
    }

    return memo;
  }, "");

  if (!winner && squares.every(s => s)) {
    winner = "tie";
  }

  return winner;
}
