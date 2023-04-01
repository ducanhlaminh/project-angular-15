import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/module/cart/cart-service.service';
import { ProductServiceService } from 'src/app/module/product/product-service.service';
import { UseServiceService } from 'src/app/module/user/use-service.service';

@Component({
    selector: 'app-layout-page',
    templateUrl: './layout-page.component.html',
    styleUrls: ['./layout-page.component.scss'],
})
export class LayoutPageComponent {
    constructor(public UserService: UseServiceService, private CartService: CartServiceService) {}
    ngOnInit() {
        const token = localStorage.getItem('token');
        token &&
            (this.CartService.getProductCart(),
            this.UserService.getCurrent().subscribe((res: any) => (this.UserService.userInfor = res.user)));
    }
}
