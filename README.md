# Pong Game

This is a pong game, a two-dimensional sports game that simulates table tennis. Each player will control a paddle which can be moved vertically up and down the board and compete with one another. The goal of the game is to hit the ball towards the opponent and score a point. The first player to reach 15 points wins the game!

This project uses

* Scalable Vector Graphics (SVG) to create the design of the game, such as the board, paddle and the pong ball. SVG was used because of its flexibility, it does not take up too much space and you can easily animate the SVG using either CSS/Javascript. 

* Object-Oriented Programming (OOP). Using OOP in this project was very useful as it helped reduced the number of duplicate codes and made it easier for modification. The general approach to using OOP for this project was to identify the classes and its requirements. For example, the paddle of the game can be considered as a class and its height, width and movement are the requirements for the class. Each class would have its own methods as well.

### Stretch goal

* There is an added feature to the game where players can add an additional of 4 more balls into the board to spice things up. The key to press is "g".

* The first player to reach 15 points wins the game!


### Tech & Programming Language
The pong game uses the following:

* HTML
* CSS
* Javascript (ES6/ES2015)
* NPM
* Webpack

### Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

### Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down

**Both player:**
* g: add one additional ball (MAX 4)
