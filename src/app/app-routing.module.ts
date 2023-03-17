import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/page/layout-page/layout-page.component';
import { CartPageComponent } from './module/cart/cart-page/cart-page.component';
import { CategoryPageComponent } from './module/product/pages/category-page/category-page.component';
import { DetailPageComponent } from './module/product/pages/detail-page/detail-page.component';
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
