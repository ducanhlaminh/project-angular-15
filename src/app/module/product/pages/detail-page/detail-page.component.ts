import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../product-service.service';

@Component({
        selector: 'app-detail-page',
        templateUrl: './detail-page.component.html',
        styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
        constructor(private route: ActivatedRoute, private productService: ProductServiceService) {}
        productDetail: any;
        ngOnInit(): void {
                let params: any = this.route.snapshot.params;
                const id = params.slug.slice(-36);
                this.productService.getProductById(id).subscribe((product: any) => {
                        this.productDetail = product.productData.rows[0];
                        console.log(this.productDetail);
                });
        }
}
