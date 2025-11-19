# Dice Game

A simple web-based dice game built with HTML, CSS, and JavaScript. Roll two dice, keep score, and try not to hit your knock-out number!

## Table of Contents
- [Features](#features)
- [File Structure](#file-structure)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [How to Run](#how-to-run)
- [Notes](#notes)


## Features
- Roll two dice with a button click
- Keep track of score and rolls
- Knock-out number feature ends the game when triggered
- Roll history displayed on game over screen
- Restart the game anytime

## File Structure
/MyGame
├── index.html
├── style.css
├── images/ # Dice images and other assets
├── script/
│ ├── animate.js
│ ├── game.js
│ ├── handleForm.js
│ ├── puUp.js
│ └── timer.js


## How to Play
1. Open `index.html` in your browser.
2. Enter your username and knock out number.
3. Click **Roll** to roll the dice.
4. Your score is updated after each roll.
5. If the sum of the dice equals your knock-out number, the game ends.
6. Check your roll history on the game-over screen.
7. Click **Play Again** to restart the game.

### Controls
- **Roll** button: Roll the dice
- **Play Again** button: Restart the game
- Input fields/buttons for player name and multiplier options (handled via `handleForm.js`)

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)

## How to Run
1. Clone or download this repository.
2. Open `index.html` in your preferred web browser.
3. Enjoy the game!

## Notes
- The dice roll animation is handled by `animate.js`.
- Score keeping, multipliers, and game-over logic are handled in `game.js`.
- Input handling for forms is in `handleForm.js`.
- Timer logic is in `timer.js`.
- Some minor bugs may exist (e.g., game-over screen timing), see `game.js` comments.

