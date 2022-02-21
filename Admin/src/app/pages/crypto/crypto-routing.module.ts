import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletComponent } from './wallet/wallet.component';
import { BuysellComponent } from './buysell/buysell.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { LendingComponent } from './lending/lending.component';
import { KycapplicationComponent } from './kycapplication/kycapplication.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    {
        path: 'wallet',
        component: WalletComponent
    },
    {
        path: 'buy-sell',
        component: BuysellComponent
    },
    {
        path: 'exchange',
        component: ExchangeComponent
    },
    {
        path: 'lending',
        component: LendingComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'kyc-application',
        component: KycapplicationComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CryptoRoutingModule { }