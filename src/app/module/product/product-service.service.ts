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
                limitProduct: 16,
                page: args.page,
                categoryCode: args.code,
                order: [args.sort.name, args.sort.code],
                price: args.price,
            },
        });
    }
    getProductById(id: any) {
        return this.http.get(environment.API_PRODUCT, {
            params: {
                id: id,
            },
        });
    }
    getProductSByName(name: string) {
        return this.http.get(environment.API_PRODUCT, {
            params: {
                name,
            },
        });
    }

    getComment(data: any) {
        return this.http.get(environment.API_COMMENT, {
            params: {
                productId: data,
            },
        });
    }
}
