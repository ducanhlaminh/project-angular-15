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
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorProductComponent } from './componnets/paginator-product/paginator-product.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './componnets/sidebar/sidebar.component';
interface NgxSpinnerConfig {
        type?: string;
}
@NgModule({
        declarations: [
                HomePageComponent,
                CategoryPageComponent,
                DetailPageComponent,
                CardProductComponent,
                PriceProductPipe,
                ProductItemDirective,
                PaginatorProductComponent,
                SidebarComponent,
        ],
        imports: [
                CommonModule,
                ProductRoutingModule,
                FontAwesomeModule,
                MatPaginatorModule,
                NgxSpinnerModule.forRoot({ type: 'ball-triangle-path' }),
                BrowserAnimationsModule,
        ],
        exports: [HomePageComponent, CategoryPageComponent, DetailPageComponent, ProductItemDirective],
})
export class ProductModule {}
