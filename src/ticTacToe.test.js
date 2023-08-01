const ticTacToe = require('./ticTacToe');

describe('User Story 1', () => {
  it('UAT1.1: When game started I want to see "Game Board Creation..." message', () => {
    expect(ticTacToe()).toBe('Game Board Creation...');
  });
});
