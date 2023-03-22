import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';
import { FormControl, Validators } from '@angular/forms';
@Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
        @Output() changeSortEmit = new EventEmitter<any>();
        max: number;
        min: number;
        step = 10000;
        @Input() value: any;
        selected = JSON.stringify(this.ProductService.sortType[0]);
        minPrice = new FormControl('10', [Validators.required, Validators.min(1)]);
        maxPrice = new FormControl('100', [Validators.required, Validators.min(1)]);
        checkPrice: boolean = true;
        constructor(public ProductService: ProductServiceService) {}
        validateRangePrice() {
                if (!this.minPrice.valid || !this.maxPrice.valid) {
                        this.checkPrice = false;
                } else {
                        this.min = parseInt(this!.minPrice!.value || '');
                        this.max = parseInt(this!.maxPrice!.value || '');
                        if (this.max < this.min) {
                                this.checkPrice = false;
                        } else {
                                this.checkPrice = true;
                        }
                }
                if (this.checkPrice) {
                        this.onChangePrice([this.min * 1000, this.max * 1000]);
                }
        }

        onChangePrice(e: any) {
                const params = { sortCurrent: JSON.parse(this.selected), price: e };
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
