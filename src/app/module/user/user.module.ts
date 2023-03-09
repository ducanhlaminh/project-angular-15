import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './page/user-page/user-page.component';
@NgModule({
        declarations: [UserPageComponent],
        imports: [CommonModule, UserRoutingModule],
        exports: [UserPageComponent],
})
export class UserModule {}
