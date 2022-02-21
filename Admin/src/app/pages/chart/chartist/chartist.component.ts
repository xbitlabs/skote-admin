import { Component, OnInit } from '@angular/core';

import { ChartType } from './chartist.model';

import {
  // tslint:disable-next-line: max-line-length
  simpleLineChart, lineScatter, areaLineChart, overlappingBarChart, stackBarChart, horizontalBarChart,
  donutAnimateChart, simplePieChart
} from './data';

@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.component.html',
  styleUrls: ['./chartist.component.scss']
})

/**
 * Chartist-chart component
 */
export class ChartistComponent implements OnInit {

  constructor() { }

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Simple line chart
  simpleLineChart: ChartType;
  // Line Scatter Diagram
  lineScatter: ChartType;
  // Line chart with area
  areaLineChart: ChartType;
  // Overlapping bars on mobile
  overlappingBarChart: ChartType;
  // Stacked bar chart
  stackBarChart: ChartType;
  // Horizontal bar chart
  horizontalBarChart: ChartType;
  // Animating a Donut with Svg.animate
  donutAnimateChart: ChartType;
  // simple pie chart
  simplePieChart: ChartType;

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'Chartist chart', active: true }];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the chart data
   */
  private _fetchData() {

    // Simple line chart data
    this.simpleLineChart = simpleLineChart;
    // Line Scatter Diagram data
    this.lineScatter = lineScatter;
    // Line chart with area chart data
    this.areaLineChart = areaLineChart;
    // Overlapping bars on mobile
    this.overlappingBarChart = overlappingBarChart;
    // Stacked bar chart data
    this.stackBarChart = stackBarChart;
    // Horizontal bar chart
    this.horizontalBarChart = horizontalBarChart;
    // Animating a Donut chart data
    this.donutAnimateChart = donutAnimateChart;
    // simple pie chart data
    this.simplePieChart = simplePieChart;
  }
}
