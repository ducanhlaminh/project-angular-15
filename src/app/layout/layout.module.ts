import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { ItemCategoryComponent } from './components/item-category/item-category.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule } from '@angular/forms';
import { PriceProductPipe } from '../module/product/price-product.pipe';
import { FooterLayoutComponent } from './components/footer-layout/footer-layout.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
        declarations: [
                LayoutPageComponent,
                HeaderLayoutComponent,
                ItemCategoryComponent,
                InputFieldComponent,
                FooterLayoutComponent,
                PriceProductPipe,
        ],
        imports: [
                CommonModule,
                LayoutRoutingModule,
                FormsModule,
                FontAwesomeModule,
                MatAutocompleteModule,
                ReactiveFormsModule,
        ],
        exports: [LayoutPageComponent, PriceProductPipe],
})
export class LayoutModule {}
