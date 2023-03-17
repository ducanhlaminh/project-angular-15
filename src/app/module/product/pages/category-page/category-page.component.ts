import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { CartServiceService } from 'src/app/module/cart/cart-service.service';
import { CardProductComponent } from '../../componnets/card-product/card-product.component';
import { ProductServiceService } from '../../product-service.service';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
interface Product {
        name: string;
        price: number;
        imgSrc: string;
}
@Component({
        selector: 'app-category-page',
        templateUrl: './category-page.component.html',
        styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit, OnDestroy {
        categoryId: any;
        listProducts: any;
        count: number;
        listCategory: any = [];
        length = 0;
        pageSize = 20;
        pageIndex = 0;
        sortCur: any;
        code: string;
        disabled = false;
        pageEvent: PageEvent;
        isLoading: boolean = false;
        navigationSubscription: any;
        priceSort = 200000;
        handlePageEvent(e: PageEvent) {
                this.pageEvent = e;
                this.length = e.length;
                this.pageSize = e.pageSize;
                this.pageIndex = e.pageIndex;
                this.getData();
        }
        constructor(
                public ProductService: ProductServiceService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
        ) {
                this.sortCur = this.ProductService.sortType[0];
        }

        ngOnInit() {
                this.categoryId = this.activatedRoute.snapshot.params['id'];
                this.activatedRoute.queryParams.subscribe((params: any) => {
                        if (typeof params.page !== 'undefined' && params.page) {
                                this.pageIndex = params.page;
                        }
                });

                this.navigationSubscription = this.router.events.subscribe((e: any) => {
                        // If it is a NavigationEnd event re-initalise the component
                        if (e instanceof NavigationEnd) {
                                this.categoryId = this.activatedRoute.snapshot.params['id'];
                                this.getData();
                        }
                });

                this.getData();
        }

        ngOnDestroy() {
                // if (this.navigationSubscription) {
                //         this.navigationSubscription.unsubscribe();
                // }
        }

        getData() {
                this.ProductService.getProduct({
                        code: this.categoryId,
                        page: this.pageIndex + 1,
                        sort: this.sortCur,
                        price: this.priceSort,
                }).subscribe((products: any) => {
                        return (
                                (this.listProducts = products.productData.rows),
                                (this.count = products.productData.count)
                        );
                });
        }
        updateGetProduct(e: any) {
                console.log(e);

                this.sortCur = e.sortCurrent;
                this.priceSort = e.price;
                this.getData();
        }
}
