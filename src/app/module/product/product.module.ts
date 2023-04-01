import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { CardProductComponent } from './componnets/card-product/card-product.component';
import { ProductItemDirective } from './pages/home-page/directive/product-item.directive';
import { IconModule } from 'src/app/icon/icon.module';
import { PaginatorProductComponent } from './componnets/paginator-product/paginator-product.component';
import { SidebarComponent } from './componnets/sidebar/sidebar.component';
import { OptionProductComponent } from './componnets/option-product/option-product.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { RangePriceComponent } from './componnets/range-price/range-price.component';
import { SlidePictureDetailComponent } from './componnets/slide-picture-detail/slide-picture-detail.component';

@NgModule({
    declarations: [
        HomePageComponent,
        CategoryPageComponent,
        DetailPageComponent,
        CardProductComponent,
        ProductItemDirective,
        PaginatorProductComponent,
        SidebarComponent,
        OptionProductComponent,
        RangePriceComponent,
        SlidePictureDetailComponent,
    ],
    imports: [CommonModule, IconModule, ProductRoutingModule, LayoutModule],
    exports: [HomePageComponent, CategoryPageComponent, DetailPageComponent, ProductItemDirective],
})
export class ProductModule {}
