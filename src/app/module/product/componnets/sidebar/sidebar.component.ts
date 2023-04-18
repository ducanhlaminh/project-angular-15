import { Component, Output, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    @Output() changeSortEmit = new EventEmitter<any>();
    @Output() changePriceEmit = new EventEmitter<any>();
    formSort: any;
    @Input() value: any;
    selected = JSON.stringify(this.ProductService.sortType[0]);
    rangePrice = { min: 100, max: 500 };
    checkPrice: boolean = true;
    constructor(public ProductService: ProductServiceService) {}
    ngOnInit(): void {
        this.formSort = new FormGroup({
            minPrice: new FormControl(100, [Validators.required, Validators.min(1)]),
            maxPrice: new FormControl(500, [Validators.required, Validators.min(1)]),
            sortCurrent: new FormControl(JSON.stringify(this.ProductService.sortType[0])),
        });
    }
    onChangePrice(e: any) {
        const params = { sortCurrent: JSON.parse(this.selected), price: e };
        this.changeSortEmit.emit(params);
    }
    onChangeSort(e: any) {
        const sortCurrent = JSON.parse(e.source._value[0]);
        const params = { sortCurrent, price: this.value };

        this.changeSortEmit.emit(params);
    }
    convertJSON(value: any) {
        return JSON.stringify(value);
    }
    onSubmit(e: any) {
        this.changePriceEmit.emit(e);
    }
}
