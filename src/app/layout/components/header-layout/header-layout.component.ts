import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/module/product/product-service.service';

@Component({
        selector: 'app-header-layout',
        templateUrl: './header-layout.component.html',
        styleUrls: ['./header-layout.component.scss'],
})
export class HeaderLayoutComponent {
        listCategory: any;
        valueSearch: string = '';
        constructor(public ProductService: ProductServiceService) {}
        ngOnInit() {
                // this.ProductService.getCategory().subscribe((cateData: any) => {
                //         this.listCategory = cateData.response;
                //         console.log(this.listCategory);
                // });
        }
        updateValueSearch(newValue: string) {
                this.valueSearch = newValue;
        }
}
