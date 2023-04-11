import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './module/cart/cart-page/cart-page.component';
import { CheckoutPageComponent } from './module/checkout/checkout-page/checkout-page.component';
import { HomePageComponent } from './module/product/pages/home-page/home-page.component';
import { LoginPageComponent } from './module/user/page/login-page/login-page.component';
import { SignupPageComponent } from './module/user/page/signup-page/signup-page.component';
import { InfoUserComponent } from './module/user/page/user-page/info-user/info-user.component';
import { StatusBillUserComponent } from './module/user/page/user-page/status-bill-user/status-bill-user.component';
import { UserPageComponent } from './module/user/page/user-page/user-page.component';
import { DetailBillComponent } from './module/user/page/user-page/detail-bill/detail-bill.component';
const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'cart',
        component: CartPageComponent,
    },
    {
        path: 'checkout',
        component: CheckoutPageComponent,
    },
    {
        path: 'login',
        component: LoginPageComponent,
    },
    {
        path: 'signup',
        component: SignupPageComponent,
    },
    {
        path: 'profile',
        component: UserPageComponent,
        children: [
            {
                path: 'infor',
                component: InfoUserComponent,
            },
            {
                path: 'status-bills',
                component: StatusBillUserComponent,
            },
            {
                path: 'bill/:id',
                component: DetailBillComponent,
            },
        ],
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
