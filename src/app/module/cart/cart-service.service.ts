import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class ProductCartType {
        couter: number = 1;
        constructor(public product: any) {
                this.product = product;
        }
}

@Injectable({
        providedIn: 'root',
})
export class CartServiceService {
        ProductCart = new Subject<ProductCartType>();
        listProduct: any = [];
        constructor() {}
        addToCart(product: any) {
                const check: boolean = this.listProduct.some(
                        (productCart: any) => productCart.product.id === product.id,
                );
                !check && (this.listProduct = [...this.listProduct, new ProductCartType(product)]);
                this.ProductCart.next(this.listProduct);
        }
        getCart() {
                return this.ProductCart.asObservable();
        }
}
