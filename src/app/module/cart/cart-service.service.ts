import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
        ProductCart = new Observable();
        listProduct: any[] = [];
        constructor() {}
        addToCart(product: any) {
                const index: number = this.listProduct.findIndex(
                        (productCart: any) => productCart.product.id === product.id,
                );
                // check duplicates product trong ccart && update counter a product
                index === -1
                        ? (this.listProduct = [...this.listProduct, new ProductCartType(product)])
                        : (this.listProduct[index].couter = ++this.listProduct[index].couter);
                console.log(this.listProduct);
        }
        getCart() {
                return this.listProduct;
        }
}
