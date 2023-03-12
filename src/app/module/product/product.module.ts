import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { CardProductComponent } from './componnets/card-product/card-product.component';
import { PriceProductPipe } from './price-product.pipe';
import { ProductItemDirective } from './pages/home-page/directive/product-item.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
        declarations: [
                HomePageComponent,
                CategoryPageComponent,
                DetailPageComponent,
                CardProductComponent,
                PriceProductPipe,
                ProductItemDirective,
        ],
        imports: [CommonModule, ProductRoutingModule, FontAwesomeModule],
        exports: [HomePageComponent, CategoryPageComponent, DetailPageComponent, ProductItemDirective],
})
export class ProductModule {}
