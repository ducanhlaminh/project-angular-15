import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
        selector: 'app-cart-page',
        templateUrl: './cart-page.component.html',
        styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
        faPlus = faPlus;
        faMinus = faMinus;

        constructor(public CartService: CartServiceService, private router: Router) {}
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
                let price = product;
                option.map((variant: any) => {
                        price += variant.price * 1000;
                });
                console.log(price);

                return price;
        }
        onSaveProductSelected() {
                let products: any[] = [];
                this.CartService.listProductSelect.map((product: any) => {
                        let variantText = '';
                        product.product.variant.map(
                                (variant: any) => (variantText += variant.variant + ' : ' + variant.value),
                        );
                        return products.push({
                                pid: product.product.productData.id,
                                qty: product.count,
                                cost: product.product.productData.costPerUnit,
                                cid: product.product.id,
                                variant: variantText,
                        });
                });

                this.CartService.createBillCache(products).subscribe(
                        (res: any) => res.status === 0 && this.router.navigateByUrl('/checkout'),
                );
        }
}
