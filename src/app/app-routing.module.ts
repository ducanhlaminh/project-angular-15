import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/page/layout-page/layout-page.component';
import { HomePageComponent } from './module/product/pages/home-page/home-page.component';
import { UserPageComponent } from './module/user/page/user-page/user-page.component';

const routes: Routes = [
        {
                path: 'home',
                component: HomePageComponent,
                children: [
                        {
                                path: 'user',
                                component: UserPageComponent,
                        },
                ],
        },
        {
                path: 'user',
                component: UserPageComponent,
        },
        {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
        },
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
})
export class AppRoutingModule {}
