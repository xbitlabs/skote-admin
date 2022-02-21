import { Component, OnInit, ViewChild } from '@angular/core';

import { visitorsOptions, popularPostData } from "./data";
import { ChartType } from "./blog.model";
import { ChartComponent } from "ng-apexcharts";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

/**
 * Blog-dashboard component
 */
export class BlogComponent implements OnInit {

  @ViewChild("chart", { static: false }) chart: ChartComponent;
  // visitor chart
  visitorsOptions: ChartType;
  popularPostData;
  public activeOptionButton = "all";
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Blog', active: true }];

    /**
     * Fetches the data
     */
    this._fetchData();

  }

  public updateOptionsData = {
    "1m": {
      series: [{
        name: 'Current',
        data: [12, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36],
    }, {
        name: 'Previous',
        data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31],
    }]
    },
    "6m": {
      series: [{
        name: 'Current',
        data: [31, 40, 28, 51, 42, 40, 51, 36, 40, 39, 31, 36],
    }, {
        name: 'Previous',
        data: [11, 32, 45, 32, 34, 22, 51, 60, 51, 52, 40, 31],
    }]
    },
    "1y": {
      series: [{
        name: 'Current',
        data: [28, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36],
    }, {
        name: 'Previous',
        data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31],
    }]
    },
    all: {
      series: [{
        name: 'Current',
        data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26]
    }, {
        name: 'Previous',
        data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34]
    }]
    }
  };

  updateOptions(option: any) {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }

  private _fetchData() {
    this.visitorsOptions = visitorsOptions;
    this.popularPostData = popularPostData;
  }
}
