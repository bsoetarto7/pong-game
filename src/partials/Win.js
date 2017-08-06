import { SVG_NS } from '../settings';
export default class Win {
  constructor(boardWidth,boardHeight, width, height) {
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
  }
  
  render(svg,player){
    // Initialize the group 
    let group = document.createElementNS(SVG_NS,'g');
    group.setAttributeNS(null, 'transform', `translate(${(this.boardWidth/2)-(this.width/2)},${(this.boardHeight/2)-(this.height/2)})`);

    // Initialize the the background rect behind the text
    let rect = document.createElementNS(SVG_NS,'rect');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', 0);
    rect.setAttributeNS(null, 'y', 0);
    rect.setAttributeNS(null, 'fill', '#40A14C');
    group.appendChild(rect);

    // Initialize the text that will display the winner
    let text = document.createElementNS(SVG_NS,'text');
    text.setAttributeNS(null, 'x', (this.width/2)-89);
    text.setAttributeNS(null, 'y', (this.height/2)+6);
    text.setAttributeNS(null, 'fill', '#fff');
    text.setAttributeNS(null, 'font-size', 20);
    text.setAttributeNS(null, 'font-family', 'Silkscreen Web');
    text.textContent = `${player} wins!`;
    group.appendChild(text);

    svg.appendChild(group);
  }
}