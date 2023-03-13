import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
        providedIn: 'root',
})
export class ProductServiceService {
        constructor(private http: HttpClient) {}
        getProduct(
                args = {
                        code: '',
                        page: 1,
                },
        ) {
                return this.http.get('http://localhost:8888/api/v1/product/', {
                        params: {
                                limitProduct: 20,
                                page: args.page,
                                categoryCode: args.code,
                        },
                });
        }
        getProductById(id: number) {
                return this.http.get('http://localhost:8888/api/v1/product/', {
                        params: {
                                limitProduct: 20,
                                id: id,
                        },
                });
        }
        getCategory() {
                return this.http.get('http://localhost:8888/api/v1/category/', {
                        // params: {
                        //         categoryCode: categoryCode,
                        // },
                });
        }
}
