import { Component, OnInit } from '@angular/core';

import { ChartType } from './chartjs.model';

import { lineAreaChart, lineBarChart, pieChart, donutChart, radarChart, polarChart } from './data';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})

/**
 * chartjs-chart component
 */
export class ChartjsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Line Chart
  lineAreaChart: ChartType;
  // Bar Chart
  lineBarChart: ChartType;
  // Pie Chart
  pieChart: ChartType;
  // Donut Chart
  donutChart: ChartType;
  // Polar area Chart
  ScatterChart: ChartType;
  // Radar Chart
  radarChart: ChartType;
  // polarChart
  polarChart: ChartType;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'Chartjs chart', active: true }];

   /**
    * Fetches the data
    */
    this._fetchData();
  }

  /**
   * Fetch chart's data
   */
  private _fetchData() {
    // Line Chart data
    this.lineAreaChart = lineAreaChart;
    // Bar Chart data
    this.lineBarChart = lineBarChart;
    // Pie Chart data
    this.pieChart = pieChart;
    // Donut Chart
    this.donutChart = donutChart;

    // Radar Chart data
    this.radarChart = radarChart;
    // Financial Report
    this.polarChart = polarChart;
  }

}
