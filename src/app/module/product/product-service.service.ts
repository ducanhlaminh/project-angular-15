import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
        providedIn: 'root',
})
export class ProductServiceService {
        sortType = [
                { lable: 'Giá cao -> thấp', name: 'costPerUnit', code: 'ASC' },
                { lable: 'Giá thấp -> cao', name: 'costPerUnit', code: 'DESC' },
                { lable: 'Mới nhất', name: 'updatedAt', code: 'ASC' },
                { lable: 'Cũ nhất', name: 'updatedAt', code: 'DESC' },
                { lable: 'A->Z', name: 'name', code: 'ASC' },
                { lable: 'A->Z', name: 'name', code: 'DESC' },
        ];
        constructor(private http: HttpClient) {}
        getProduct(
                args = {
                        code: '',
                        page: 1,
                        sort: { lable: '', name: '', code: '' },
                        price: 0,
                },
        ) {
                return this.http.get(environment.API_PRODUCT, {
                        params: {
                                limitProduct: 20,
                                page: args.page,
                                categoryCode: args.code,
                                order: [args.sort.name, args.sort.code],
                                price: [args.price, 9000000],
                        },
                });
        }
        getProductById(id: number) {
                return this.http.get(environment.API_PRODUCT, {
                        params: {
                                limitProduct: 20,
                                id: id,
                        },
                });
        }

        postData() {
                const headersHttp = new HttpHeaders({
                        authorization:
                                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY2MjNkZDc5LTNjZGYtNDhjNy04MzBkLWM0MzdkODk4ZmI4ZiIsInJvbGUiOiJSMiIsImlhdCI6MTY3ODg3NjYyMywiZXhwIjoxNjc5NzQwNjIzfQ.FzRaELD-I3o46ghx82pNv1-6QiwISeZ1DV5ocnKi9JA',
                });
                const requestOption = {
                        headers: headersHttp,
                };
                let data = {
                        pid: '0e865e56-52e2-4325-af75-f6efc690bf09',
                        variant: [
                                {
                                        variant: 'Kích cỡ',
                                        value: 'XS',
                                        price: -10,
                                },
                        ],
                };
                return this.http.post('http://localhost:8888/api/v1/cart', data, {
                        headers: new HttpHeaders({
                                authorization:
                                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY2MjNkZDc5LTNjZGYtNDhjNy04MzBkLWM0MzdkODk4ZmI4ZiIsInJvbGUiOiJSMiIsImlhdCI6MTY3ODg3NjYyMywiZXhwIjoxNjc5NzQwNjIzfQ.FzRaELD-I3o46ghx82pNv1-6QiwISeZ1DV5ocnKi9JA',
                        }),
                });
        }
}
