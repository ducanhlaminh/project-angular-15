import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './page/user-page/user-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';
import { BillPageComponent } from './page/bill-page/bill-page.component';
@NgModule({
        declarations: [UserPageComponent, LoginPageComponent, SignupPageComponent, BillPageComponent],
        imports: [CommonModule, UserRoutingModule],
        exports: [UserPageComponent],
})
export class UserModule {}
