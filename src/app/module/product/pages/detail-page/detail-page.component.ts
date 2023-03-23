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
        productPrice: number;
        selectOption: any = [];
        navigationSubscription: any;
        productId: any;
        ngOnInit(): void {
                // get detail product by id productId
                let params: any = this.route.snapshot.params;
                const id = params.slug.slice(-36);
                this.productService.getProductById(id).subscribe((product: any) => {
                        this.productDetail = product.productData.rows[0];
                        this.productPrice = this.productDetail.costPerUnit;
                });
                this.navigationSubscription = this.router.events.subscribe((e: any) => {
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
                const select = e.source._value;

                let indx = this.selectOption.findIndex((option: any) => {
                        return option.name === select.name;
                });
                if (indx !== -1) {
                        this.selectOption.some((item: any) => JSON.stringify(item) === JSON.stringify(select))
                                ? (this.selectOption = this.selectOption.filter(
                                          (option: any) => JSON.stringify(option) !== JSON.stringify(select),
                                  ))
                                : (this.selectOption[indx] = select);
                } else {
                        this.selectOption.push(select);
                }
                console.log(this.selectOption);

                this.setPriceProduct();
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
        setPriceProduct() {
                this.productPrice = this.productDetail.costPerUnit;
                this.selectOption.map((option: any) => (this.productPrice += option.value.price * 1000));
        }
}
