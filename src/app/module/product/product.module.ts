import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
@NgModule({
        declarations: [HomePageComponent, CategoryPageComponent, DetailPageComponent],
        imports: [CommonModule, ProductRoutingModule],
        exports: [HomePageComponent, CategoryPageComponent, DetailPageComponent],
})
export class ProductModule {}
