import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CartServiceService } from 'src/app/module/cart/cart-service.service';
import { ProductServiceService } from '../../product-service.service';

@Component({
        selector: 'app-detail-page',
        templateUrl: './detail-page.component.html',
        styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
        constructor(
                private route: ActivatedRoute,
                private productService: ProductServiceService,
                private CartService: CartServiceService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
        ) {}
        productDetail: any;
        selectOption: any = [];
        navigationSubscription: any;
        productId: any;
        ngOnInit(): void {
                // get detail product by id productId
                let params: any = this.route.snapshot.params;
                const id = params.slug.slice(-36);
                this.productService.getProductById(id).subscribe((product: any) => {
                        this.productDetail = product.productData.rows[0];
                        console.log(this.productDetail.variants);
                });
                this.navigationSubscription = this.router.events.subscribe((e: any) => {
                        console.log(e);

                        // If it is a NavigationEnd event re-initalise the component
                        if (e instanceof NavigationEnd) {
                                this.productId = this.activatedRoute.snapshot.params['slug'];
                                console.log(this.productId);

                                this.productService.getProductById(this.productId).subscribe((product: any) => {
                                        this.productDetail = product.productData.rows[0];
                                });
                        }
                });
        }
        onSelectVariant(e: any) {
                this.selectOption = this.selectOption.filter((option: any) => option.name !== e.source._value.name);
                this.selectOption.push(e.source._value);
        }
        addToCart() {
                const variant = this.selectOption.map((option: any) => ({
                        variant: option.name,
                        value: option.value.type,
                        price: option.value.price,
                }));
                this.CartService.addToCart({ pid: this.productDetail.id, variant }).subscribe((res: any) => {
                        res.status === 0 && this.CartService.getProductCart();
                });
        }
}
