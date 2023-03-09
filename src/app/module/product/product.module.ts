import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';
@NgModule({
        declarations: [HomePageComponent],
        imports: [CommonModule, ProductRoutingModule, LayoutModule],
        exports: [HomePageComponent],
})
export class ProductModule {}
