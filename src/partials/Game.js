import { SVG_NS, KEYS, PADDLE_OPTIONS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';

export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(element);
		this.board = new Board(this.width, this.height); // Instantiate the board from the Board.js into the constructor
		this.player1 = new Paddle(
			this.height,
			PADDLE_OPTIONS.paddleWidth,
			PADDLE_OPTIONS.paddleHeight,
			PADDLE_OPTIONS.boardGap,
			((this.height - PADDLE_OPTIONS.paddleHeight)/2),
			KEYS.a,
			KEYS.z
		); // Instantiate the player 1 from the Paddle.js into the constructor
		this.player2 = new Paddle(
			this.height,
			PADDLE_OPTIONS.paddleWidth,
			PADDLE_OPTIONS.paddleHeight,
			(this.width - PADDLE_OPTIONS.boardGap - PADDLE_OPTIONS.paddleWidth),
			((this.height - PADDLE_OPTIONS.paddleHeight)/2),
			KEYS.up,
			KEYS.down
		); // Instantiate the player 2 from the Paddle.js into the constructor
			this.ball = new Ball('8',this.width, this.height);
	}

	render() {
		// Initialize the svg element and append it to html
		this.gameElement.innerHTML = ''; // Empty the game div before redrawing the svg
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.board.render(svg); // Invoke board render method and pass svg as an argument
		this.player1.render(svg);
		this.player2.render(svg);
		this.ball.render(svg)
	}
}