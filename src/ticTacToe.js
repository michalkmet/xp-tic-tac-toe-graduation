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
  let endStr = '';
  for (let i = 0; i < 9; i++) {
    let randomNumber = getRandomNumber(alreadyPicked);
    if (i % 2 === 0) {
      cells[randomNumber] = 'X';
    } else {
      cells[randomNumber] = 'O';
    }
    winner = checkWhoWins(cells);
    board = gameBoard(cells);
    console.log(board);
    
    if (winner[0] === 'X' || winner[0] === 'O') {
      endStr = board + '\n\n' + getWinnerMessage(winner[0]);
      break;
    }
  }
  if (winner.length === 0) {
    endStr = board + '\n\n' + getTieMessage();
  }
  console.log(endStr);
  gameStr += board;
  return gameStr;
}

function checkWhoWins(cells) {
  let winner = [];
  ['X', 'O'].forEach((player) => {
    if (
      (cells[0] === player && cells[1] === player && cells[2] === player ||
      cells[3] === player && cells[4] === player && cells[5] === player ||
      cells[6] === player && cells[7] === player && cells[8] === player 
      ) || (
      cells[0] === player && cells[3] === player && cells[6] === player ||
      cells[1] === player && cells[4] === player && cells[7] === player ||
      cells[2] === player && cells[5] === player && cells[8] === player 
      ) || (
      cells[0] === player && cells[4] === player && cells[8] === player ||
      cells[2] === player && cells[4] === player && cells[6] === player 
      )
    ) {
      winner.push(player);
    }
  });
  return winner;
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

function getWinnerMessage(winner) {
  return 'PLAYER ' + winner + ' WON!';
}

function getTieMessage() {
  return 'GAME ENDS WITH A DRAW!';
}

module.exports = { ticTacToe, gameBoard, getWinnerMessage, checkWhoWins, getTieMessage };
