import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './page/user-page/user-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';
import { BillPageComponent } from './page/bill-page/bill-page.component';
import { HistoryBillComponent } from './page/user-page/history-bill/history-bill.component';
import { ProfilePageComponent } from './componets/profile-page/profile-page.component';
import { ManageBillsComponent } from './page/manage-bills/manage-bills.component';
import { HistoryBillsComponent } from './page/history-bills/history-bills.component';
import { AdminComponent } from './page/admin/admin.component';
import { FormsModule } from '@angular/forms';
@NgModule({
        declarations: [
                UserPageComponent,
                LoginPageComponent,
                SignupPageComponent,
                BillPageComponent,
                HistoryBillComponent,
                ProfilePageComponent,
                ManageBillsComponent,
                HistoryBillsComponent,
                AdminComponent,
        ],
        imports: [CommonModule, UserRoutingModule, FormsModule],
        exports: [UserPageComponent, LoginPageComponent, SignupPageComponent, BillPageComponent],
})
export class UserModule {}
