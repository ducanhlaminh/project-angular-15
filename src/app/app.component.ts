import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

class Product {
        name!: string;
        price!: number;
        constructor(name: string, price: number) {
                this.name = name;
                this.price = price;
        }
}

@Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
        title = 'project-angular-15';
        listProduct: Product[] = [];
        constructor(private http: HttpClient) {
                this.callApi().subscribe((res) => {
                        res.productData.rows.map((item: any) =>
                                this.listProduct.push(new Product(item.name, item.costPerUnit)),
                        );
                });
        }
        ngOnInit(): void {
                console.log(this.listProduct);
        }
        callApi(): Observable<any> {
                {
                        return this.http.get('http://localhost:8888/api/v1/product/');
                }
        }
}
