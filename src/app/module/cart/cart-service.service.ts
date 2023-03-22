import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
        totalPrice: number = 0;
        listProductSelect: any = [];
        constructor(private http: HttpClient) {}

        addToCart(product: any) {
                return this.http.post(environment.API_CART, product);
        }
        getProductCart() {
                this.resetCart();
                this.http.get(environment.API_CART).subscribe(
                        (response: any) =>
                                (this.listProduct = response.yourCart.map((product: any) => {
                                        return {
                                                product,
                                                count: 1,
                                        };
                                })),
                );
        }
        resetCart() {
                this.listProduct = [];
                this.totalPrice = 0;
        }
        deleteProductCart(product: any) {
                console.log(product);

                let cids = [product.product.id, 10000];
                console.log(typeof cids);

                this.http.delete(environment.API_CART, { params: { cids: cids } }).subscribe((response: any) => {
                        response.status === 0 && this.getProductCart();
                });
        }
        getValueTotal() {
                this.totalPrice = 0;
                this.listProductSelect.map(
                        (product: any) => (this.totalPrice += product.product.productData.costPerUnit * product.count),
                );
        }
        updateSelected(product: any) {
                this.listProductSelect.map((item: any) => {
                        item.product.id === product.product.id ? (item = product) : '';
                });
                this.getValueTotal();
        }
        addToSelected(product: any) {
                this.listProductSelect.some((item: any) => item.product.id === product.product.id)
                        ? (this.listProductSelect = this.listProductSelect.filter(
                                  (item: any) => item.product.id !== product.product.id,
                          ))
                        : this.listProductSelect.push(product);

                this.getValueTotal();
        }
}
