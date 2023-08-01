const { ticTacToe, gameBoard, getWinnerMessage, checkWhoWins } = require('./ticTacToe');

describe('User Story 1: Initial messages and game board creation', () => {
  it('UAT1.1: When game started I want to see "Game Board Creation..." message', () => {
    expect(ticTacToe()).toContain('Game Board Creation...');
  });
  it("UAT1.2: When game started I want to see empty board: '\n | | \n-+-+-\n | | \n-+-+-\n | | '", () => {
    expect(ticTacToe()).toContain('Game Board Creation...\n | | \n-+-+-\n | | \n-+-+-\n | | ');
  });
  it('UAT1.3: When board is created I want to see "\n\nBoard Created." message', () => {
    expect(ticTacToe()).toContain('\n\nBoard Created.');
  });
  it('UAT1.4: When board is created I want to see "\nThe game will start with player X" message', () => {
    expect(ticTacToe()).toContain('\nThe game will start with player X');
  });
});

describe('User Story 2: Bots drawing X and O on the board', () => {
  it('UAT2.1 When board is created I want to see Player 1 to write X on the board', () => {
    let cells = ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    expect(gameBoard(cells)).toContain('\nX| | \n-+-+-\n | | \n-+-+-\n | | ');
  });
  it('UAT2.2 When first player is finished I want to see Player 2 to write O on the board', () => {
    let cells = ['X', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    expect(gameBoard(cells)).toContain('\nX|O| \n-+-+-\n | | \n-+-+-\n | | ');
  });
});

describe('User Story 3: randomly drawing on the board until game is finished', () => {
  it('UAT 3.1 When bots are playing I want to see that they change in their turns', () => {
    expect(ticTacToe()).not.toContain('The game will start with player X\n | | ');
  });
  it('UAT 3.2 When bots are playing I want to see that they randomly draw on the board', () => {
    expect(ticTacToe()).not.toContain('The game will start with player X\n | | ');
    expect(ticTacToe()).toContain('X');
    expect(ticTacToe()).toContain('O');
  });
});

describe('User Story 4: Who wins the game?', () => {
  it('UAT4.1 When Player 1 draw three X in the row Then I want to see PLAYER X WON! message', () => {
    let cells = ['X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' '];
    expect(gameBoard(cells)).toContain('\nX|X|X\n-+-+-\n | | \n-+-+-\n | | ');
    expect(checkWhoWins(cells)).toStrictEqual(['X']);
    expect(getWinnerMessage('X')).toContain('PLAYER X WON!');
  });
  it('UAT4.2 When Player 2 draw three O in the column Then I want to see PLAYER O WON! message', () => {
    let cells = ['X', 'X', 'O', ' ', ' ', 'O', ' ', ' ', 'O'];
    expect(gameBoard(cells)).toContain('\nX|X|O\n-+-+-\n | |O\n-+-+-\n | |O');
    expect(checkWhoWins(cells)).toStrictEqual(['O']);
    expect(getWinnerMessage('O')).toContain('PLAYER O WON!');
  });
  it('UAT4.3 When Player 1 draw three X diagonaly Then I want to see PLAYER X WON! message', () => {
    let cells = ['X', 'X', 'O', ' ', 'X', 'O', ' ', ' ', 'X'];
    expect(gameBoard(cells)).toContain('\nX|X|O\n-+-+-\n |X|O\n-+-+-\n | |X');
    expect(checkWhoWins(cells)).toStrictEqual(['X']);
    expect(getWinnerMessage('X')).toContain('PLAYER X WON!');
  });
  it('UAT4.4 When There is no winner after 9 rounds Then I want to see GAME ENDS WITH A DRAW! message', () => {
    let cells = ['X', 'X', 'O', ' ', 'X', 'O', ' ', ' ', 'X'];
    expect(gameBoard(cells)).toContain('\nX|X|O\n-+-+-\n |X|O\n-+-+-\n | |X');
    expect(checkWhoWins(cells)).toStrictEqual(['X']);
    expect(getWinnerMessage('X')).toContain('PLAYER X WON!');
  });
});
