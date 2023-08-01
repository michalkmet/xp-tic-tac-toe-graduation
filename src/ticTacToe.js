function ticTacToe() {
  let gameStr = '';
  gameStr += 'Game Board Creation...';
  gameStr += createBoard();
  gameStr += '\n\nBoard Created.';
  console.log(gameStr);
  return gameStr;
}

function createBoard() {
  return '\n | | \n-+-+-\n | | \n-+-+-\n | | ';
}

module.exports = ticTacToe;
