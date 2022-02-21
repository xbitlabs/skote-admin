import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollspyDirective } from './scrollspy.directive'

@NgModule({
    declarations: [ScrollspyDirective],
    imports: [
        CommonModule,
    ],
    exports: [ScrollspyDirective]
})
export class SharedModule { }
