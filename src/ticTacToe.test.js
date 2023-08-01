const { ticTacToe, gameBoard } = require('./ticTacToe');

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
