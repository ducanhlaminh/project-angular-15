import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartServiceService } from 'src/app/module/cart/cart-service.service';
import { ProductServiceService } from 'src/app/module/product/product-service.service';

@Component({
        selector: 'app-header-layout',
        templateUrl: './header-layout.component.html',
        styleUrls: ['./header-layout.component.scss'],
})
export class HeaderLayoutComponent {
        listCategory: any;
        valueSearch: string = '';
        listProductCart: any = [];
        constructor(public ProductService: ProductServiceService, public CartService: CartServiceService) {
                this.listProductCart = this.CartService.listProductCart;
                console.log(this.listProductCart);
        }
        faCartShopping = faCartShopping;
        ngOnInit() {
                // this.ProductService.getCategory().subscribe((cateData: any) => {
                //         this.listCategory = cateData.response;
                //         console.log(this.listCategory);
                // });
        }
        updateValueSearch(newValue: string) {
                this.valueSearch = newValue;
        }
}
