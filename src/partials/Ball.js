import { SVG_NS } from '../settings';

export default class Ball {

  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.reset();
    this.ping = new Audio('public/sounds/pong-01.wav');
  }
  reset() {
    this.vy = 0;
    while(this.vy === 0){
      this.vy = Math.floor(Math.random() * 10 - 5); // Vector y movement
    } 

    this.vx = this.direction * (6 - Math.abs(this.vy)); // Verctor x movement

    this.x = this.boardWidth / 2; // Starting x position of ball
    this.y = this.boardHeight / 2; // Starting y position of ball
  }
  move(){
    this.x += this.vx; // Move x ball
    this.y += this.vy; // Move y ball
  }
  wallCollision(player1,player2){
    const hitLeft = this.x - this.radius <= 0; // Check if hit left wall of board
    const hitRight = this.x + this.radius >= this.boardWidth; // Check if hit right wall of board
    const hitTop = this.y - this.radius <= 0; // Check if hit top wall of board
    const hitBottom = this.y + this.radius >= this.boardHeight; // Check if hit bottom wall of board

    if(hitLeft || hitRight){
      if(hitLeft){
        this.goal(player2); // player 2 scores if hit left side of wall
        this.vx = -this.vx; // reverse direction to player 1
      }else{
        this.goal(player1); // player 1 scores if hit right side of wall
      }
    }else if(hitTop || hitBottom){
      this.vy = -this.vy; // Reverse direction of ball when hit the top and bottom side of the wall
    }
  }
  paddleCollision(player1,player2){
    if(this.vx > 0){
      // Detect player 2 paddle collision
      let paddle = player2.coordinates(player2.x,player2.y,player2.width,player2.height);
      let [leftX,rightX,topY,bottomY] = paddle;
      if(this.x + this.radius >=leftX && this.y >= topY && this.y <= bottomY){
        this.vx = -this.vx;
        this.ping.play();
      }
    }else{
      // Detect player 1 paddle collision
      let paddle = player1.coordinates(player1.x,player1.y,player1.width,player1.height);
      let [leftX,rightX,topY,bottomY] = paddle;
      if(this.x - this.radius <= rightX && this.y >= topY && this.y <= bottomY){
        this.vx = -this.vx;
        this.ping.play();
      }
    }
  }
  goal(player){
    player.score++; // increment player's score
    this.reset(); // reset the ball
  }
  render(svg,player1,player2){
    this.move();
    this.wallCollision(player1,player2);
    this.paddleCollision(player1,player2);
    
    // Initialize the rect that will act as the paddle
    let circle = document.createElementNS(SVG_NS,'circle');
		circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'fill', '#c9f364');
    svg.appendChild(circle); 
  }
}