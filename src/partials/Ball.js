import { SVG_NS } from '../settings';

export default class Ball {

  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
  }
  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
  }
  render(svg){
    // Initialize the rect that will act as the paddle
    let circle = document.createElementNS(SVG_NS,'circle');
		circle.setAttributeNS(null, 'cx', this.boardWidth/2);
    circle.setAttributeNS(null, 'cy', this.boardHeight/2);
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'fill', '#fff');
    svg.appendChild(circle);
  }
}