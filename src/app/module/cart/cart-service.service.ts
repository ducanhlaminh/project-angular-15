import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
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
                this.http
                        .get(environment.API_CART)
                        .subscribe((response: any) => (this.listProduct = response.yourCart));
                return;
        }
}
