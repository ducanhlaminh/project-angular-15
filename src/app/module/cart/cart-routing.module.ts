import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
})
export class CartRoutingModule {}
