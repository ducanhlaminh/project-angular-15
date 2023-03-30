import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryBillComponent } from './page/user-page/history-bill/history-bill.component';

import { BillPageComponent } from './page/bill-page/bill-page.component';
import { AdminComponent } from './page/admin/admin.component';
import { ManageBillsComponent } from './page/manage-bills/manage-bills.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { InfoUserComponent } from './page/user-page/history-bill/info-user/info-user.component';

export const userRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'manage-bills',
                component: ManageBillsComponent,
            },
        ],
    },
    {
        path: 'bill',
        component: BillPageComponent,
    },
    {
        path: 'history-bill',
        component: HistoryBillComponent,
    },
    {
        path: 'login',
        component: LoginPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
