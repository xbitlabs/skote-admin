import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})

/**
 * Form wizard component
 */
export class WizardComponent implements OnInit {
 // bread crumb items
 breadCrumbItems: Array<{}>;

 constructor() { }

 ngOnInit() {
   this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Wizard', active: true }];
 }

}
