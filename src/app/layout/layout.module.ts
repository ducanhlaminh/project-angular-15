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
import { InputFormComponent } from './components/input-form/input-form.component';
import { LoadingComponent } from './components/loading/loading.component';
import { IconModule } from '../icon/icon.module';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
    declarations: [
        LayoutPageComponent,
        HeaderLayoutComponent,
        ItemCategoryComponent,
        InputFieldComponent,
        FooterLayoutComponent,
        PriceProductPipe,
        InputFormComponent,
        LoadingComponent,
    ],
    imports: [
        CommonModule,
        IconModule,
        LayoutRoutingModule,
        FormsModule,
        FontAwesomeModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({ timeOut: 10000, positionClass: 'toast-bottom-right', preventDuplicates: true }),
    ],
    exports: [LayoutPageComponent, PriceProductPipe, InputFormComponent],
})
export class LayoutModule {}
