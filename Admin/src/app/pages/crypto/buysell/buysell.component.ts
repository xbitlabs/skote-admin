import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buysell',
  templateUrl: './buysell.component.html',
  styleUrls: ['./buysell.component.scss']
})
export class BuysellComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Crypto' }, { label: 'Buy/Sell', active: true }];
  }

}
