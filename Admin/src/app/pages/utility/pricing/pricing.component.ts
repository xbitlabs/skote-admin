import { Component, OnInit } from '@angular/core';

import { Pricing } from './pricing.model';

import { pricingData } from './data';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})

/**
 * Utility Pricing component
 */
export class PricingComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  pricingData: Pricing[];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Utility' }, { label: 'Pricing', active: true }];

    this.pricingData = pricingData;
  }
}
