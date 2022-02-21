import { Component, OnInit } from '@angular/core';

import { shopsData } from './data';

import { Shops } from './shops.model';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})

/**
 * Ecommerce Shops component
 */
export class ShopsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  shopsData: Shops[];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Shops', active: true }];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * Fetches the data
   */
  private _fetchData() {
    this.shopsData = shopsData;
  }

}

