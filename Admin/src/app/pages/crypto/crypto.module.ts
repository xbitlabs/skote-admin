import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule, NgbNavModule, NgbModalModule, NgbPaginationModule, NgbTypeaheadModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { ArchwizardModule } from 'angular-archwizard';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { SimplebarAngularModule } from 'simplebar-angular';

import { CryptoRoutingModule } from './crypto-routing.module';

import { WalletComponent } from './wallet/wallet.component';
import { BuysellComponent } from './buysell/buysell.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { LendingComponent } from './lending/lending.component';
import { KycapplicationComponent } from './kycapplication/kycapplication.component';

import { WalletSortableService } from './wallet/wallet-sortable.directive';
import { OrderSortableService } from './orders/orders-sortable.directive'

import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [WalletComponent, BuysellComponent, ExchangeComponent, LendingComponent, KycapplicationComponent, WalletSortableService, OrdersComponent, OrderSortableService],
  imports: [
    CommonModule,
    UIModule,
    CryptoRoutingModule,
    NgbDropdownModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbNavModule,
    NgbModalModule,
    NgbDatepickerModule,
    ArchwizardModule,
    DropzoneModule,
    SimplebarAngularModule
  ]
})
export class CryptoModule { }
