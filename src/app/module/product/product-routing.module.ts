import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

const routes: Routes = [
        {
                path: 'category/:id',
                component: CategoryPageComponent,
        },
        {
                path: 'product/:id',
                component: DetailPageComponent,
        },
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
})
export class ProductRoutingModule {}
