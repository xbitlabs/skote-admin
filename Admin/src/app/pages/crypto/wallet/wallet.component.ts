import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { WalletService } from './wallet.service';
import { WalletSortableService, SortEvent } from './wallet-sortable.directive';

import { ChartType, Activities } from './wallet.model';

import { OveviewChart, activitiesData } from './data';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  providers: [WalletService, DecimalPipe]
})
export class WalletComponent implements OnInit {

  // breadcrumb items
  breadCrumbItems: Array<{}>;
  OveviewChart: ChartType;

  activitiesData: Activities[];

  activities$: Observable<Activities[]>;
  total$: Observable<number>;

  @ViewChildren(WalletSortableService) headers: QueryList<WalletSortableService>;

  constructor(public service: WalletService) {
    this.activities$ = service.activities$;
    this.total$ = service.total$;
  }


  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Crypto' }, { label: 'Wallets', active: true }];

    this.OveviewChart = OveviewChart;
    this.activitiesData = activitiesData;
  }

  /**
 * Sort table data
 * @param param0 sort the column
 *
 */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
