import { Injectable } from '@angular/core';

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
        listProductCart: ProductCartType[] = [];
        constructor() {}
        addToCart(product: any) {
                const check: boolean = this.listProductCart.some(
                        (productCart: any) => productCart.product.id === product.id,
                );
                !check && (this.listProductCart = [...this.listProductCart, new ProductCartType(product)]);

                console.log(this.listProductCart);
        }
}
