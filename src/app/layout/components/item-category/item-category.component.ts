import { Component, Input } from '@angular/core';

@Component({
        selector: 'app-item-category',
        templateUrl: './item-category.component.html',
        styleUrls: ['./item-category.component.scss'],
})
export class ItemCategoryComponent {
        @Input() category!: any;
}
