import { Component, OnInit, ViewChild } from '@angular/core';

import { walletRadialChart, overviewChart, transactionsData, bitconinChart, ethereumChart, litecoinChart } from './data';

import { ChartType, Transactions } from './crypto.model';
import { ChartComponent } from "ng-apexcharts";
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  @ViewChild("chart", { static: false }) chart: ChartComponent;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  public activeOptionButton = "all";

  walletRadialChart: ChartType;
  overviewChart: ChartType;
  bitconinChart: ChartType;
  ethereumChart: ChartType;
  litecoinChart: ChartType;

  walletBalanceData: Array<Object>;

  transactionsData: Transactions[];
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Crypto', active: true }];

    this.configService.getConfig().subscribe(response => {
      this.walletBalanceData = response.cryptoWalletBalance;
    });

    this._fetchData();
  }

  public updateOptionsData = {
    "1m": {
      xaxis: {
        min: new Date("28 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "6m": {
      xaxis: {
        min: new Date("27 Sep 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1y": {
      xaxis: {
        min: new Date("27 Feb 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1yd": {
      xaxis: {
        min: new Date("01 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    all: {
      xaxis: {
        min: undefined,
        max: undefined
      }
    }
  };

  public updateOptions(option: any): void {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }

  getBalanceData(data) {
    let month = data.target.value;
    switch (month) {
      case "january":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 1211.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 468.46",
            expense: "$ 127.38",
            chartSeries: [47, 68, 49],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 723.64",
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 1225.32",
              },
              {
                text: "Litecoin",
                coin: "35.7411 LTC",
                amount: "$ 4563.09",
              },
            ],
          },
        ];
        break;
      case "february":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 2111.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 2168.46",
            expense: "$ 927.38",
            chartSeries: [38, 78, 48],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 1123.64",
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 4025.32",
              },
              {
                text: "Litecoin",
                coin: "35.7411 LTC",
                amount: "$ 2263.09",
              },
            ],
          },
        ]
        break;
      case "march":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 1011.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 668.46",
            expense: "$ 427.38",
            chartSeries: [36, 58, 78],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 523.64",
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 1025.32",
              },
              {
                text: "Litecoin",
                coin: "14.7411 LTC",
                amount: "$ 6563.09",
              },
            ],
          }
        ];
        break;
      case "december":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 1011.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 668.46",
            expense: "$ 427.38",
            chartSeries: [25, 58, 47],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 523.64",
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 1025.32",
              },
              {
                text: "Litecoin",
                coin: "14.7411 LTC",
                amount: "$ 6563.09",
              },
            ],
          },

        ]
        break;
    }
  }

  private _fetchData() {
    this.walletRadialChart = walletRadialChart;
    this.overviewChart = overviewChart;
    this.transactionsData = transactionsData;
    this.bitconinChart = bitconinChart;
    this.ethereumChart = ethereumChart;
    this.litecoinChart = litecoinChart;
  }
}
