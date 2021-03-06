import { SVG_NS } from '../settings';

export default class Paddle {

  constructor(boardHeight, width, height, x, y,up,down,spaceBar){
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
    this.keyPressListener(up, down, spaceBar);
  }
  keyPressListener(up, down, spacebar){
		document.addEventListener('keydown', event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
        case spacebar:
          this.pause = !this.pause;
          break;
      }
    });
	}
  up(){ // Method that will move the paddle up
    if(this.pause){
      return;
    }
    this.y = Math.max(this.y - this.speed,0);
    
  }
  down(){ // Method that will move the paddle down
    if(this.pause){
      return;
    }
    this.y = Math.min(this.y + this.speed,this.boardHeight - this.height);
  }
  coordinates(x, y, width, height) { //Method that will return the x and y coordinates of the paddle
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }
  render(svg){
    // Initialize the rect that will act as the paddle
    let rect = document.createElementNS(SVG_NS,'rect');
		rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    rect.setAttributeNS(null, 'fill', '#fff');
    svg.appendChild(rect);
  }
}