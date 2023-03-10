import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';

interface Product {
        name: string;
        price: number;
        imgSrc: string;
}

@Component({
        selector: 'app-home-page',
        templateUrl: './home-page.component.html',
        styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
        listProducts: any;
        @Input() listCategory: any = [];
        constructor(public ProductService: ProductServiceService) {}
        ngOnInit() {
                this.ProductService.getCategory().subscribe((cateData: any) => {
                        this.listCategory = cateData.response;
                        this.ProductService.getProduct().subscribe((productData: any) => {
                                this.listProducts = productData.productData.rows;
                        });
                });
        }
}
