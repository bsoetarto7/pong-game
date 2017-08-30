import { SVG_NS, KEYS, PADDLE_OPTIONS, BALL_OPTIONS, WIN_OPTIONS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Win from './Win';

export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(element);
		this.numberOfBall = 1;
		this.listOfBalls =[];
		this.board = new Board(this.width, this.height);
		this.player1 = new Paddle(
			this.height,
			PADDLE_OPTIONS.paddleWidth,
			PADDLE_OPTIONS.paddleHeight,
			PADDLE_OPTIONS.boardGap,
			((this.height - PADDLE_OPTIONS.paddleHeight)/2),
			KEYS.a,
			KEYS.z,
			KEYS.spaceBar
		); // Instantiate the player 1 from the Paddle.js into the constructor
		this.player2 = new Paddle(
			this.height,
			PADDLE_OPTIONS.paddleWidth,
			PADDLE_OPTIONS.paddleHeight,
			(this.width - PADDLE_OPTIONS.boardGap - PADDLE_OPTIONS.paddleWidth),
			((this.height - PADDLE_OPTIONS.paddleHeight)/2),
			KEYS.up,
			KEYS.down,
			KEYS.spaceBar
		); // Instantiate the player 2 from the Paddle.js into the constructor
		this.listOfBalls.push(new Ball(BALL_OPTIONS.radius,this.width, this.height)); // Instantiate first ball and push into list of ball array
		this.player1Score = new Score((this.width/2)-80,30,30); // Instantiate player 1 score object
		this.player2Score = new Score((this.width/2)+63,30,30); // Instantiate player 2 score object
		this.win = new Win (this.width,this.height,WIN_OPTIONS.width,WIN_OPTIONS.height); // Instantiate winning object
		document.addEventListener('keydown', event => {
      switch (event.key) {
        case KEYS.spaceBar:
					this.pause = !this.pause;
					break;
				case KEYS.g:
					if (this.numberOfBall<5){
						this.numberOfBall++;
						this.listOfBalls.push(new Ball(BALL_OPTIONS.radius,this.width, this.height));
					}
					break;
      }
    });
	}

	render() {
		// Initialize the svg element and append it to html
		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.board.render(svg);
		this.player1Score.render(svg,this.player1.score);
		this.player2Score.render(svg,this.player2.score);
		this.player1.render(svg);
		this.player2.render(svg);

		// Check if which player scored 15 first and stop the game
		if(this.player1.score === 15 || this.player2.score === 15){
			this.win.render(svg,(this.player1.score === 15?'Player 1':'Player 2'));
			return
		}else if (this.pause){
			return
		}
		for(let ball of this.listOfBalls){
			ball.render(svg,this.player1,this.player2);
		}
	}
}