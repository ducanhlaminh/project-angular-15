import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './module/cart/cart-service.service';
import { UseServiceService } from './module/user/use-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'project-angular-15';
    constructor(private UserService: UseServiceService) {}
    ngOnInit(): void {
        // localStorage.getItem('token') &&
        //     this.UserService.getCurrent().subscribe((data: any) => {
        //         this.UserService.userInfor = data.user;
        //         console.log(this.UserService.userInfor);
        //     });
    }
}
