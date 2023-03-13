import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductServiceService } from '../../product-service.service';
@Component({
        selector: 'app-paginator-product',
        templateUrl: './paginator-product.component.html',
        styleUrls: ['./paginator-product.component.scss'],
})
export class PaginatorProductComponent {
        @Input() count: number;
        constructor(public ProductService: ProductServiceService) {}
        // ngOnChanges(changes: SimpleChanges): void {
        //         this.length = this.count;
        // }
}
