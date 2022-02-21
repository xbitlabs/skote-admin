import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import { SellingchartComponent } from './sellingchart/sellingchart.component';

@NgModule({
  declarations: [SellingchartComponent],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [SellingchartComponent]
})
export class SharedModule { }
