import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
@NgModule({
        declarations: [LayoutComponent, LayoutFooterComponent, LayoutHeaderComponent],
        imports: [BrowserModule],
        exports: [LayoutComponent],
})
export class LayoutModule {}
