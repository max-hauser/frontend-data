console.log(d3) // check if d3 is working

import { select, arc } from 'd3';


const svg = select('svg');
const cirle = svg.append('circle');

cirle.attr('r', 100);
cirle.attr('cx', 960 / 7);
cirle.attr('cy', 500 / 3.5);
cirle.attr('fill', 'yellow');

const leftEye = svg.append('circle');

leftEye.attr('r', 10);
leftEye.attr('cx', 960 / 9);
leftEye.attr('cy', 500 / 4);
leftEye.attr('fill', 'black');

const rightEye = svg.append('circle');

rightEye.attr('r', 10);
rightEye.attr('cx', 960 / 5.5);
rightEye.attr('cy', 500 / 4);
rightEye.attr('fill', 'black');

const g = svg.append('g')
  .attr('transform', 'translate(140, 170)')

  const mouth = g
  .append('path')
    .attr('d', arc()({
      innerRadius: 50,
      outerRadius: 40,
      startAngle: 1.5,
      endAngle: 4.7
    }));