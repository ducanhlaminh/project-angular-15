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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SiderbarUserComponent } from './componets/siderbar-user/siderbar-user.component';
import { InfoUserComponent } from './page/user-page/info-user/info-user.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { IconModule } from 'src/app/icon/icon.module';
import { StatusBillUserComponent } from './page/user-page/status-bill-user/status-bill-user.component';
import { DetailBillComponent } from './page/user-page/detail-bill/detail-bill.component';
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
        SiderbarUserComponent,
        InfoUserComponent,
        StatusBillUserComponent,
        DetailBillComponent,
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        MatFormFieldModule,
        LayoutModule,
        IconModule,
        ReactiveFormsModule,
    ],
    exports: [UserPageComponent, LoginPageComponent, SignupPageComponent, BillPageComponent],
})
export class UserModule {}
