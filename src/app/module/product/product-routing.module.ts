import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

const routeProduct: Routes = [
        {
                path: 'category/:slug/:id',
                component: CategoryPageComponent,
        },
        {
                path: 'product/:slug',
                component: DetailPageComponent,
        },
];

@NgModule({
        imports: [RouterModule.forChild(routeProduct)],
        exports: [RouterModule],
})
export class ProductRoutingModule {}
