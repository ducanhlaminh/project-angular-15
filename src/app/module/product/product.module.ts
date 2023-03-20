import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { CardProductComponent } from './componnets/card-product/card-product.component';
import { ProductItemDirective } from './pages/home-page/directive/product-item.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorProductComponent } from './componnets/paginator-product/paginator-product.component';
import { SidebarComponent } from './componnets/sidebar/sidebar.component';
import { OptionProductComponent } from './componnets/option-product/option-product.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { LayoutModule } from 'src/app/layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
        ],
        imports: [
                CommonModule,
                MatProgressSpinnerModule,
                BrowserAnimationsModule,
                ProductRoutingModule,
                FontAwesomeModule,
                MatPaginatorModule,
                MatChipsModule,
                MatOptionModule,
                MatSelectModule,
                MatSliderModule,
                FormsModule,
                LayoutModule,
        ],
        exports: [HomePageComponent, CategoryPageComponent, DetailPageComponent, ProductItemDirective],
})
export class ProductModule {}
