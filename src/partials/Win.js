import { SVG_NS } from '../settings';
export default class Win {
  constructor(boardWidth,boardHeight, width, height, x, y) {
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
  }
  
  render(svg,player1,player2){
    let group = document.createElementNS(SVG_NS,'g');
    group.setAttributeNS(null, 'transform', `translate(${(this.boardWidth/2)-110},${this.boardHeight/2-20})`);

    let rect = document.createElementNS(SVG_NS,'rect');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', 0);
    rect.setAttributeNS(null, 'y', 0);
    rect.setAttributeNS(null, 'fill', '#000');
    group.appendChild(rect);

    let text = document.createElementNS(SVG_NS,'text');
    text.setAttributeNS(null, 'x', 20);
    text.setAttributeNS(null, 'y', 25);
    text.setAttributeNS(null, 'fill', '#fff');
    text.setAttributeNS(null, 'font-size', 20);
    text.setAttributeNS(null, 'font-family', 'Silkscreen Web');
    text.textContent = player1.score===15 ? `Player 1 wins!`:`Player 2 wins`;
    group.appendChild(text);

    svg.appendChild(group);
  }
}