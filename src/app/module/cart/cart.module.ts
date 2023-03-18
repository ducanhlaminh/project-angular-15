import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { PriceProductPipe } from '../product/price-product.pipe';
import { LayoutModule } from 'src/app/layout/layout.module';
@NgModule({
        declarations: [CartPageComponent],
        imports: [CommonModule, CartRoutingModule, FormsModule, LayoutModule],
})
export class CartModule {}
