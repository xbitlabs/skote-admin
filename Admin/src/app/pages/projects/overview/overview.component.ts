import { Component, OnInit } from '@angular/core';

import { overviewBarChart } from './data';

import { ChartType } from './overview.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

/**
 * Overview component
 */
export class OverviewComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  overviewBarChart: ChartType;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Projects Overview', active: true }];

    this.overviewBarChart = overviewBarChart;
  }
}
