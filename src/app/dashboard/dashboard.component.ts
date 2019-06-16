import { DisplayService } from './../display.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var d3: any;

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router, service: DisplayService) {
    this.empdetails = service.getDisplay();
   }
   empdetails;

  ngOnInit() {
    this.getChart();
  }
  getChart() {
    d3.selectAll('svg').remove();
    const margin = { top: 20, right: 10, bottom: 90, left: 550 };
    const width = 1100 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const xScale = d3.scaleBand()
      .range([0, width])
      .round(true)
      .paddingInner(0.1); // space between bars (it's a ratio)
    const yScale = d3.scaleLinear()
      .range([height, 0]);

    const xAxis = d3.axisBottom()
      .scale(xScale);

    const yAxis = d3.axisLeft()
      .scale(yScale)
      .ticks(10, '%');

    const svg = d3.select('body')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.right})`);

    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    xScale
      .domain(this.empdetails.map(d => d.empname));

    yScale
      .domain([0, d3.max(this.empdetails, d => d.age)]);

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Age');

    svg.selectAll('.bar').data(this.empdetails)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.empname))
      .attr('width', xScale.bandwidth())
      .attr('y', d => yScale(d.age))
      .attr('height', d => height - yScale(d.age))
      .on('mouseover', (d) => {
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip.html(`<span>${d.age}</span>`)
          .style('left', `${d3.event.layerX}px`)
          .style('top', `${(d3.event.layerY - 28)}px`);
      })
      .on('mouseout', () => tooltip.transition().duration(500).style('opacity', 0));
    }

}
