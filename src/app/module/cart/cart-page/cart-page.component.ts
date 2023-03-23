import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
@Component({
        selector: 'app-cart-page',
        templateUrl: './cart-page.component.html',
        styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
        faPlus = faPlus;
        faMinus = faMinus;

        constructor(public CartService: CartServiceService) {}
        ngOnInit(): void {
                this.CartService.totalPrice = 0;
                this.CartService.listProductSelect = [];
        }
        incCount(product: any) {
                ++product.count;
                this.CartService.updateSelected(product);
        }
        desCount(product: any) {
                --product.count;

                this.CartService.updateSelected(product);
        }
        selectProduct(product: any) {
                this.CartService.addToSelected(product);
        }
        priceProductOption(product: any, option: any) {
                console.log(product, option);

                let price = product.costPerUnit;
                option.map((variant: any) => {
                        price += variant.price * 1000;
                });
                console.log(price);

                return price;
        }
}
