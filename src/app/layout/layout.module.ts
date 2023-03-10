import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { ItemCategoryComponent } from './components/item-category/item-category.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule } from '@angular/forms';
@NgModule({
        declarations: [LayoutPageComponent, HeaderLayoutComponent, ItemCategoryComponent, InputFieldComponent],
        imports: [CommonModule, LayoutRoutingModule, FormsModule],
        exports: [LayoutPageComponent],
})
export class LayoutModule {}
