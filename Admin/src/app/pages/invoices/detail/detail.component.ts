import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

/**
 * Invoices Detail component
 */
export class DetailComponent implements OnInit {

 // bread crumb items
 breadCrumbItems: Array<{}>;

 constructor() { }

 ngOnInit() {
   this.breadCrumbItems = [{ label: 'Invoices' }, { label: 'Detail', active: true }];
 }
}
