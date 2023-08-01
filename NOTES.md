# Notes

The exercise involves developing a Tic-Tac-Toe game strictly adhering to the TDD rules.
The system should run in BOT mode (random BOT moves for player X & O) to print on the screen all the player's moves (with a 2 seconds timeout between each round) until someone won or the game ends with a draw.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:
- ✅ Initial Project template
- ✅ Initial Refactor
- ✅ user stories
 User Story 1:
- ✅ UAT1.1: When game started I want to see "Game Board Creation..." message
- ✅ UAT1.2: When game started I want to see empty board: '\n | | \n-+-+-\n | | \n-+-+-\n | | '
- ✅ UAT1.3: When board is created I want to see "\n\nBoard Created." message
- ✅ UAT1.4: When board is created I want to see "\nThe game will start with player X" message
- ✅ User stories

Pomodoro 2:
- ✅ UAT2.1 When board is created I want to see Player 1 to write X on the board
- ✅ UAT2.2 When first player is finished I want to see Player 2 to write O on the board
- ✅ New User stories
User Story 3: randomly drawing on the board until game is finished
- 🚧 UAT 3.1 When bots are playing I want to see that they change in their turns

Pomodoro 3:
- ✅ Planning 
- ✅ UAT 3.1 When bots are playing I want to see that they change in their turns
- ✅ UAT 3.2 When bots are playing I want to see that they randomly draw on the board
- ✅ New User stories


User Story 4: Who wins the game?
- 🚧 UAT4.1 When Player 1 draw three X in the row Then I want to see PLAYER X WON! message

Pomodoro 4:
- ✅ Planning
- ✅ UAT4.1 When Player 1 draw three X in the row Then I want to see PLAYER X WON! message
- ✅ UAT4.2 When Player 2 draw three O in the column Then I want to see PLAYER O WON! message
- added refactor item
- ✅ UAT4.3 When Player 1 draw three X diagonaly Then I want to see PLAYER X WON! message
- 🚧 UAT4.4 When There is no winner after 9 rounds Then I want to see GAME ENDS WITH A DRAW! message

Pomodoro 5:
- ✅ Planning
- ✅ refactor User stories according the requirement
- ✅ UAT4.4 When There is no winner after 9 rounds Then I want to see GAME ENDS WITH A DRAW! message
- ✅ Add timeout story
- 🚧 UAT5.1 When Player does the turn then it should wait 2 seconds for second player

Pomodoro 6:
- ✅ Planning
- ✅ Refactor console logs for better game experience
- ✅ UAT5.1 When Player does the turn then it should wait 2 seconds for second player
