import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/module/cart/cart-service.service';
import { ProductServiceService } from 'src/app/module/product/product-service.service';

@Component({
        selector: 'app-layout-page',
        templateUrl: './layout-page.component.html',
        styleUrls: ['./layout-page.component.scss'],
})
export class LayoutPageComponent {
        constructor(public ProductService: ProductServiceService, private CartService: CartServiceService) {}
        ngOnInit() {
                this.CartService.getProductCart();
        }
}
