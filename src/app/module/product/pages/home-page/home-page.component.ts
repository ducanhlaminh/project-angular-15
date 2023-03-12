import { Component, OnInit, Input, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { map } from 'rxjs';
import { CartServiceService } from 'src/app/module/cart/cart-service.service';
import { CardProductComponent } from '../../componnets/card-product/card-product.component';
import { ProductServiceService } from '../../product-service.service';
interface Product {
        name: string;
        price: number;
        imgSrc: string;
}
const Observer = {
        next: (value: any) => console.log(value),
        error: (err: any) => console.log(err),
        complete: () => console.log('complete'),
};
@Component({
        selector: 'app-home-page',
        templateUrl: './home-page.component.html',
        styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
        listProducts: any;
        @Input() listCategory: any = [];
        constructor(public ProductService: ProductServiceService, public CartService: CartServiceService) {}
        ngOnInit() {
                this.ProductService.getCategory().subscribe((cateData: any) => {
                        this.listCategory = cateData.response;
                        this.ProductService.getProduct().subscribe(
                                (products: any) => (this.listProducts = products.productData.rows),
                        );
                });
        }
}
