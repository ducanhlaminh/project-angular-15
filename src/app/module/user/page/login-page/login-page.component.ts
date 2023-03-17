import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UseServiceService } from '../../use-service.service';

@Component({
        selector: 'app-login-page',
        templateUrl: './login-page.component.html',
        styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
        @Input() email: string;
        password: string;
        constructor(private UserService: UseServiceService, private router: Router) {}
        loginAcc() {
                this.UserService.login(this.email, this.password).subscribe((res: any) => {
                        res.status = '0' && (localStorage.setItem('token', res.token), this.router.navigateByUrl(''));
                });
        }
}
