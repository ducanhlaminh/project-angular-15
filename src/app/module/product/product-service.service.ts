import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
        providedIn: 'root',
})
export class ProductServiceService {
        constructor(private http: HttpClient) {}
        getProduct() {
                return this.http.get('http://localhost:8888/api/v1/product/', {
                        // params: {
                        //         categoryCode: categoryCode,
                        // },
                });
        }
        getCategory() {
                return this.http.get('http://localhost:8888/api/v1/category/');
        }
}
