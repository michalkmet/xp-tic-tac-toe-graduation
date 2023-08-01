const ticTacToe = require('./ticTacToe');

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
