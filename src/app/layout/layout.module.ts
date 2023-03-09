import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';

@NgModule({
        declarations: [LayoutPageComponent],
        imports: [CommonModule, LayoutRoutingModule],
        exports: [LayoutPageComponent],
})
export class LayoutModule {}
