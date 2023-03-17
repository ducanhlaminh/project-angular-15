import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
        selector: 'app-cart-page',
        templateUrl: './cart-page.component.html',
        styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
        listProduct: any = [];
        constructor(public CartService: CartServiceService) {
                this.listProduct = this.CartService.listProduct.map((product) => ({ ...product, count: 1 }));
                console.log(this.listProduct);
        }
}
