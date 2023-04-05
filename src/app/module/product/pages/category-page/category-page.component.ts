import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getProductBegin } from 'src/app/store/actions/app.actions';
import { selectFeatureCount, selectFeatureLoading, selectFeatureProduct } from 'src/app/store/selector/appSelector';
import { LoadingService } from 'src/app/layout/components/loading/loading.service';
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
    listProducts$ = this.store.select(selectFeatureProduct);
    length$: any = this.store.select(selectFeatureCount);

    categoryId: any;
    listCategory: any = [];
    length: number;
    pageSize = 16;
    pageIndex = 0;
    sortDefault: any;
    code: string;
    pageEvent: PageEvent;
    navigationSubscription: any;
    priceSort = [10000, 100000];

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
        private store: Store<{ app: any }>,
    ) {
        this.sortDefault = this.ProductService.sortType[0];
    }
    ngOnInit() {
        this.categoryId = this.activatedRoute.snapshot.params['id'];
        this.activatedRoute.queryParams.subscribe((params: any) => {
            if (typeof params.page !== 'undefined' && params.page) {
                this.pageIndex = params.page;
            }
        });
        // this.loadingPage$.subscribe((data) => console.log(data));
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                this.categoryId = this.activatedRoute.snapshot.params['id'];
                this.pageIndex = 0;
                this.getData();
            }
        });

        this.getData();
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
    getData() {
        this.store.dispatch(
            getProductBegin({
                data: {
                    code: this.categoryId,
                    page: this.pageIndex + 1,
                    sort: this.sortDefault,
                    price: this.priceSort,
                },
            }),
        );

        // this.ProductService.getProduct({
        //         code: this.categoryId,
        //         page: this.pageIndex + 1,
        //         sort: this.sortCur,
        //         price: this.priceSort,
        // }).subscribe((products: any) => {
        //         return (
        //                 (this.listProducts = products.productData.rows),
        //                 (this.count = products.productData.count)
        //         );
        // });
    }
    updateGetProduct(e: any) {
        this.sortDefault = JSON.parse(e.value.sortCurrent);
        this.priceSort = [e.value.minPrice * 1000, e.value.maxPrice * 1000];

        this.getData();
    }
}
