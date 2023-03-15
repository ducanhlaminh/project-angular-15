import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartServiceService } from 'src/app/module/cart/cart-service.service';
import { ProductServiceService } from 'src/app/module/product/product-service.service';

@Component({
        selector: 'app-header-layout',
        templateUrl: './header-layout.component.html',
        styleUrls: ['./header-layout.component.scss'],
})
export class HeaderLayoutComponent {
        listCategory: any;
        valueSearch: string = '';
        listProductCart = [];

        navigationSubscription: any;

        constructor(
                public ProductService: ProductServiceService,
                public CartService: CartServiceService,
                private router: Router,
        ) {}
        faCartShopping = faCartShopping;
        ngOnInit() {
                this.ProductService.getCategory().subscribe((cateData: any) => {
                        this.listCategory = cateData.response;
                });
                // update products in cart
        }
        updateValueSearch(newValue: string) {
                this.valueSearch = newValue;
        }
        addToCart() {}
        convert(str: string): string {
                str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
                str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
                str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
                str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
                str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
                str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
                str = str.replace(/đ/g, 'd');
                str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
                str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
                str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
                str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
                str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
                str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
                str = str.replace(/Đ/g, 'D');
                str = str.replace(
                        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
                        ' ',
                );
                str = str.replace(/  +/g, ' ');
                str = str.split(' ').join('-');
                return str;
        }
}
