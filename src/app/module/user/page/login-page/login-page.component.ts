import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/module/cart/cart-service.service';
import { UseServiceService } from '../../use-service.service';

@Component({
        selector: 'app-login-page',
        templateUrl: './login-page.component.html',
        styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
        @Input() email: string;
        password: string;
        constructor(
                private UserService: UseServiceService,
                private CartService: CartServiceService,
                private router: Router,
        ) {}
        loginAcc() {
                this.UserService.login(this.email, this.password).subscribe((res: any) => {
                        // status = 0 => save token in LocalStorage , navigation to Home , update cart
                        res.status =
                                '0' &&
                                (localStorage.setItem('token', res.token),
                                this.router.navigateByUrl(''),
                                this.CartService.getProductCart());
                });
        }
}
