import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { PriceProductPipe } from '../product/price-product.pipe';
@NgModule({
        declarations: [CartPageComponent, PriceProductPipe],
        imports: [CommonModule, CartRoutingModule, FormsModule],
})
export class CartModule {}
