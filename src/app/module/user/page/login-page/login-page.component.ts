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
                this.validateEmail(this.email) &&
                        // this.validatePassword(this.password) &&
                        this.UserService.login(this.email, this.password).subscribe((res: any) => {
                                // status = 0 => save token in LocalStorage , navigation to Home , update cart
                                res.status =
                                        '0' &&
                                        (localStorage.setItem('token', res.token),
                                        this.router.navigateByUrl(''),
                                        this.CartService.getProductCart());
                        });
        }
        validateEmail = (email: string) => {
                return email.match(
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                );
        };
        validatePassword = (pw: string) => {
                return pw.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/);
        };
}
