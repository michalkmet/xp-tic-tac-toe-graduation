function ticTacToe() {
  let gameStr = '';
  let cells = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  gameStr += 'Game Board Creation...';
  gameStr += gameBoard(cells);
  gameStr += '\n\nBoard Created.';
  gameStr += '\nThe game will start with player X';
  console.log(gameStr);

  let board = gameBoard(cells);
  console.log(board);
  gameStr += board;
  return gameStr;
}

function gameBoard(cells) {
  let board = '\n';
  let line = '\n-+-+-\n';
  for (let i = 0; i < 9; i++) {
    board += cells[i];
    if (i != 2 && i != 5 && i != 8) {
      board += '|';
    }
    if (i === 2 || i === 5) {
      board += line;
    }
  }
  return board;
}

module.exports = { ticTacToe, gameBoard };
