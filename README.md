# Awesome repo

The exercise involves developing a Tic-Tac-Toe game strictly adhering to the TDD rules.
The system should run in BOT mode (random BOT moves for player X & O) to print on the screen all the player's moves (with a 2 seconds timeout between each round) until someone won or the game ends with a draw.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

User Story 1: Initial messages and game board creation
As a User, I want to see game started and empty board created messages

- ✅ DONE UAT1.1: When game started I want to see "Game Board Creation..." message
- ✅ DONE UAT1.2: When game started I want to see empty board: '\n | | \n-+-+-\n | | \n-+-+-\n | | '
- ✅ DONE UAT1.3: When board is created I want to see "\n\nBoard Created." message
- ✅ DONE UAT1.4: When board is created I want to see "\nThe game will start with player X" message

User Story 2: Bots drawing X and O on the board
As a User, I want to see two bot players drawing X and O on the board

- ✅ DONE UAT2.1 When board is created I want to see Player 1 to write X on the board
- ✅ DONE UAT2.2 When first player is finished I want to see Player 2 to write O on the board


User Story 3: randomly drawing on the board until game is finished
As a User, I want to see two bot players randomly drawing X and O on the board until game is finished

- ✅ DONE UAT3.1 When bots are playing I want to see that they change in their turns
- ✅ DONE UAT3.2 When bots are playing I want to see that they randomly draw on the board

User Story 4: Who wins the game?
As a User, I want to see who wins the game or if it's a tie
- ✅ DONE UAT4.1 When Player 1 draw three X in the column Then I want to see PLAYER X WON! message'
- ✅ DONE UAT4.2 When Player 2 draw three O in the row Then I want to see PLAYER O WON! message
- ✅ DONE UAT4.3 When Player 1 draw three X diagonaly Then I want to see PLAYER X WON! message
- ✅ DONE UAT4.4 When There is no winner after 9 rounds Then I want to see GAME ENDS WITH A DRAW! message

User Story 5: Game timeouts
As a User, I want to see game flowing smoothly
- ⚠ TODO UAT5.1 When Player does the turn then it should wait 2 seconds for second player
