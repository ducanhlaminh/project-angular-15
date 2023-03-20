import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
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
        listProduct: any[] = [];
        constructor(private http: HttpClient) {}

        addToCart(product: any) {
                return this.http.post(environment.API_CART, product);
        }
        getProductCart() {
                this.http.get(environment.API_CART).subscribe(
                        (response: any) =>
                                (this.listProduct = response.yourCart.map((product: any) => ({
                                        product,
                                        count: 1,
                                }))),
                );
                return this.listProduct;
        }
        resetCart() {
                this.listProduct = [];
        }
        deleteProductCart(product: any) {
                console.log(product);

                let cids = [product.product.id, 10000];
                console.log(typeof cids);

                this.http.delete(environment.API_CART, { params: { cids: cids } }).subscribe((response: any) => {
                        response.status === 0 && this.getProductCart();
                });
        }
}
