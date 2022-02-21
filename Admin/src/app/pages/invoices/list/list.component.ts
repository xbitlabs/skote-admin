import { Component, OnInit } from '@angular/core';

import { listData } from './data';

import { InvoiceList } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

/**
 * Invoices list component
 */
export class ListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  listData: InvoiceList[];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Invoices' }, { label: 'Invoice List', active: true }];

    /**
     * fetches the data
     */
    this._fetchData();
  }

  /**
   * fetches the invoice list data
   */
  private _fetchData() {
    this.listData = listData;
  }
}
