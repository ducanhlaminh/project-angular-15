import { Component } from '@angular/core';
import { CategoryService } from 'src/app/module/product/category.service';
import { ProductServiceService } from 'src/app/module/product/product-service.service';

@Component({
        selector: 'app-footer-layout',
        templateUrl: './footer-layout.component.html',
        styleUrls: ['./footer-layout.component.scss'],
})
export class FooterLayoutComponent {
        listCates: any;
        constructor(public CategoryService: CategoryService) {
                this.CategoryService.getCategory().subscribe((category: any) => {
                        this.listCates = category.response;
                });
        }
        ngOnInit() {}
}
