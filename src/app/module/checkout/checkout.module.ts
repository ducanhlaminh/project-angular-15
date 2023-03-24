import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { IconModule } from 'src/app/icon/icon.module';
import { LayoutModule } from 'src/app/layout/layout.module';
@NgModule({
        declarations: [CheckoutPageComponent],
        imports: [CommonModule, CheckoutRoutingModule, IconModule, LayoutModule],
})
export class CheckoutModule {}
