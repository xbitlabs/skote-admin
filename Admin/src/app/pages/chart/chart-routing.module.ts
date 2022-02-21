import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApexComponent } from './apex/apex.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component';
import { EchartComponent } from './echart/echart.component';

const routes: Routes = [
    {
        path: 'apex',
        component: ApexComponent
    },
    {
        path: 'chartjs',
        component: ChartjsComponent
    },
    {
        path: 'chartist',
        component: ChartistComponent
    },
    {
        path: 'echart',
        component: EchartComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChartRoutingModule { }
