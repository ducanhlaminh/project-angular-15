import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/module/cart/cart-service.service';
import { UseServiceService } from '../../use-service.service';

@Component({
        selector: 'app-signup-page',
        templateUrl: './signup-page.component.html',
        styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
        @Input() email: string;
        password: string;
        password2: string;
        constructor(
                private UserService: UseServiceService,
                private CartService: CartServiceService,
                private router: Router,
        ) {}
        signupAcc() {
                this.validateEmail() &&
                        this.checkPassword2() &&
                        // this.validatePassword(this.password) &&
                        this.UserService.signup(this.email, this.password).subscribe((res: any) => {
                                // status = 0 => save token in LocalStorage , navigation to Home , update cart
                                res.status = '0' && this.router.navigateByUrl('/login');
                        });
        }
        checkPassword2() {
                return this.password2 === this.password;
        }
        validateEmail = () => {
                const status = this.email?.match(
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                );
                return status;
        };
        validatePassword = () => {
                return this.password?.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/);
        };
}
