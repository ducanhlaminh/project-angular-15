import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        ) {}
        productDetail: any;
        selectOption: any = [];
        ngOnInit(): void {
                // get detail product by id productId
                let params: any = this.route.snapshot.params;
                const id = params.slug.slice(-36);
                this.productService.getProductById(id).subscribe((product: any) => {
                        this.productDetail = product.productData.rows[0];
                        console.log(this.productDetail.variants);
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
