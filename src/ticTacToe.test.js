const ticTacToe = require('./ticTacToe');

describe('User Story 1: Initial messages and game board creation', () => {
  it('UAT1.1: When game started I want to see "Game Board Creation..." message', () => {
    expect(ticTacToe()).toContain('Game Board Creation...');
  });
  it("UAT1.2: When game started I want to see empty board: '\n | | \n-+-+-\n | | \n-+-+-\n | | '", () => {
    expect(ticTacToe()).toContain('Game Board Creation...\n | | \n-+-+-\n | | \n-+-+-\n | | ');
  });
});
