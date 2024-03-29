import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
        providedIn: 'root',
})
export class CategoryService {
        constructor(private http: HttpClient) {}
        getCategory() {
                return this.http.get('http://localhost:8888/api/v1/category/', {
                        // params: {
                        //         categoryCode: categoryCode,
                        // },
                });
        }
}
