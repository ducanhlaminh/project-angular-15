import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LayoutComponent } from 'src/app/layout/layout.component';
@NgModule({
        declarations: [LayoutComponent],
        imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
