import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';

@Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
        @Output() changeSortEmit = new EventEmitter<any>();
        max = 500000;
        min = 100000;
        step = 10000;
        @Input() value = 200000;
        selected = JSON.stringify(this.ProductService.sortType[0]);
        constructor(public ProductService: ProductServiceService) {}

        onChangePrice(e: any) {
                this.value = e;
                const params = { sortCurrent: JSON.parse(this.selected), price: this.value };
                this.changeSortEmit.emit(params);
        }
        onChangeSort(e: any) {
                const sortCurrent = JSON.parse(e.value);
                const params = { sortCurrent, price: this.value };
                this.changeSortEmit.emit(params);
        }
        convertJSON(value: any) {
                return JSON.stringify(value);
        }
}
