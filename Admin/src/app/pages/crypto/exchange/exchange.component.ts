import { Component, OnInit } from '@angular/core';

import { ChartType, Notification } from './exchange.model';

import { priceCandlestickChart, notificationData } from './data';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;

  priceCandlestickChart: ChartType;

  notificationData: Notification[];

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Crypto' }, { label: 'Exchange', active: true }];

    this.priceCandlestickChart = priceCandlestickChart;
    this.notificationData = notificationData;
  }

}
