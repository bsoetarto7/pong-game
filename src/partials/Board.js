import { SVG_NS } from '../settings';

export default class Board {

  constructor(width,height){
    this.width = width;
    this.height = height;
  }
  render(svg){
    // Initialize the rect that will act as the board
    let rect = document.createElementNS(SVG_NS,'rect');
		rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', '0');
    rect.setAttributeNS(null, 'y', '0');
    rect.setAttributeNS(null, 'fill', '#000');

    // Initialize the line that will go across the center of the board acting as a divider
    let line = document.createElementNS(SVG_NS,'line');
    line.setAttributeNS(null, 'x1', (this.width/2));
    line.setAttributeNS(null, 'x2', (this.width/2));
    line.setAttributeNS(null, 'y1', 0);
    line.setAttributeNS(null, 'y2', this.height);
    line.setAttributeNS(null, 'stroke-dasharray', '20, 20');
    line.setAttributeNS(null, 'stroke', '#fff');
    line.setAttributeNS(null, 'stroke-width', '5');

    // Append child elements into the svg
    svg.appendChild(rect);
    svg.appendChild(line);
  }
}