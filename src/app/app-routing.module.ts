import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './module/cart/cart-page/cart-page.component';
import { CheckoutPageComponent } from './module/checkout/checkout-page/checkout-page.component';
import { HomePageComponent } from './module/product/pages/home-page/home-page.component';
import { LoginPageComponent } from './module/user/page/login-page/login-page.component';
import { SignupPageComponent } from './module/user/page/signup-page/signup-page.component';
import { UserPageComponent } from './module/user/page/user-page/user-page.component';
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
