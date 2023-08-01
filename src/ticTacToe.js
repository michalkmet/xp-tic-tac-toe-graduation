function ticTacToe() {
  let gameStr = '';
  let cells = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  let alreadyPicked = [];
  let winner = [];
  gameStr += 'Game Board Creation...';
  gameStr += gameBoard(cells);
  gameStr += '\n\nBoard Created.';
  gameStr += '\nThe game will start with player X';
  console.log(gameStr);
  let board = '';
  for (let i = 0; i < 9; i++) {
    let randomNumber = getRandomNumber(alreadyPicked);
    if (i % 2 === 0) {
      cells[randomNumber] = 'X';
    } else {
      cells[randomNumber] = 'O';
    }
    winner = checkWhoWins(cells);
    console.log('cells: ', cells);
    board = gameBoard(cells);
    console.log(board);
  }
  gameStr += board;

  return gameStr;
}

function getRandomNumber(alreadyPicked) {
  let randomNumber = Math.floor(Math.random() * 9);
  if (alreadyPicked.includes(randomNumber)) {
    return getRandomNumber(alreadyPicked);
  }
  alreadyPicked.push(randomNumber);
  return randomNumber;
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
