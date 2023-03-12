import { Component, Input, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/module/cart/cart-service.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
@Component({
        selector: 'app-card-product',
        templateUrl: './card-product.component.html',
        styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
        @Input() product: any;
        faCartShopping = faCartShopping;
        constructor(public CartService: CartServiceService) {}
        ngOnInit(): void {}
        addToCartProduct(product: any) {
                this.CartService.addToCart(product);
        }
        onBuy(product: any) {}
}
