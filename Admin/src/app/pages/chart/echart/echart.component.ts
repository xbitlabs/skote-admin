import { Component, OnInit } from '@angular/core';

import { lineChart, barChart, pieChart, customPieChart, gradientBarChart, gaugeChart, lineBarChart, donughnutChart, bubbleChart } from './data';

import { ChartType } from './echart.model';

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.scss']
})

/**
 * E-chart component
 */
export class EchartComponent implements OnInit {

  constructor() { }

  lineChart: ChartType;
  barChart: ChartType;
  pieChart: ChartType;
  customPieChart: ChartType;
  gradientBarChart: ChartType;
  lineBarChart: ChartType;
  donughnutChart: ChartType;
  bubbleChart: ChartType;
  gaugeChart: ChartType;

  // bread crumb items
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'E - Chart', active: true }];

    this._fetchData();
  }

  /**
   * Fetch the chart data
   */
  private _fetchData() {
    this.lineChart = lineChart;
    this.barChart = barChart;
    this.pieChart = pieChart;
    this.customPieChart = customPieChart;
    this.gradientBarChart = gradientBarChart;
    this.lineBarChart = lineBarChart;
    this.donughnutChart = donughnutChart;
    this.bubbleChart = bubbleChart;
    this.gaugeChart = gaugeChart;
  }

}
