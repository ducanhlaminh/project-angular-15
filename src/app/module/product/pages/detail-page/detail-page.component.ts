import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CartServiceService } from 'src/app/module/cart/cart-service.service';
import { ProductServiceService } from '../../product-service.service';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-detail-page',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit, OnDestroy {
    productDetail: any;
    productPrice: number;
    selectOption: any = [];
    navigationSubscription: any;
    productId: any;
    posiImgCur = 0;
    faChevronRight = faChevronRight;
    faChevronLeft = faChevronLeft;
    picsProduct: any = [];
    comments: any[] = [];
    constructor(
        private route: ActivatedRoute,
        private productService: ProductServiceService,
        private CartService: CartServiceService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService,
    ) {}
    ngOnInit(): void {
        // get detail product by id productId
        let params: any = this.route.snapshot.params;
        const id = params.slug.slice(-36);

        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                this.productId = this.activatedRoute.snapshot.params['slug'];
                this.getProduct(this.productId);
            }
        });
        this.getProduct(id);
    }
    showSuccess() {
        this.toastr.success('Thêm vào giỏ hàng thành công');
    }
    ngOnDestroy(): void {
        this.navigationSubscription.unsubscribe();
    }
    onSelectVariant(e: any) {
        const select = e.source._value;

        let indx = this.selectOption.findIndex((option: any) => {
            return option.name === select.name;
        });
        if (indx !== -1) {
            this.selectOption.some((item: any) => JSON.stringify(item) === JSON.stringify(select))
                ? (this.selectOption = this.selectOption.filter(
                      (option: any) => JSON.stringify(option) !== JSON.stringify(select),
                  ))
                : (this.selectOption[indx] = select);
        } else {
            this.selectOption.push(select);
        }
        console.log(this.selectOption);

        this.setPriceProduct();
    }
    addToCart() {
        const variant = this.selectOption.map((option: any) => ({
            variant: option.name,
            value: option.value.type,
            price: option.value.price,
        }));
        this.CartService.addToCart({ pid: this.productDetail.id, variant }).subscribe((res: any) => {
            res.status === 0 && (this.CartService.getProductCart(), this.showSuccess());
        });
    }
    setPriceProduct() {
        this.productPrice = this.productDetail.costPerUnit;
        this.selectOption.map((option: any) => (this.productPrice += option.value.price * 1000));
    }

    nextImg() {
        let positionNext = this.posiImgCur + 1;
        if (positionNext > this.picsProduct.length - 1) {
            this.posiImgCur = 0;
        } else {
            ++this.posiImgCur;
        }
    }
    backImg() {
        let positionNext = this.posiImgCur - 1;
        if (positionNext < 0) {
            this.posiImgCur = this.picsProduct.length - 1;
        } else {
            --this.posiImgCur;
        }
    }
    selectedImg(index: number) {
        this.posiImgCur = index;
    }
    getComment(id: any) {
        this.productService.getComment(id).subscribe((data: any) => {
            (this.comments = data.commentData.rows), this.handleComments();
        });
    }
    handleComments() {
        let commentsParent: any = this.comments.filter((comment: any) => {
            return !comment.parentCommentId;
        });
        commentsParent.map((comment: any) => {
            comment.child = [];
            this.comments.map((comment1: any) => {
                if (comment1.parentCommentId === comment.id) {
                    comment.child.push(comment1);
                }
            });
        });
        this.comments = commentsParent;
        console.log(this.comments);
    }
    getProduct(id: any) {
        this.productService.getProductById(id).subscribe((product: any) => {
            this.productDetail = product.productData.rows[0];
            this.productPrice = this.productDetail.costPerUnit;
            this.picsProduct[0] = this.productDetail.mainImage;
            this.picsProduct[1] = this.productDetail.image1;
            this.picsProduct[2] = this.productDetail.image2;
            this.picsProduct[3] = this.productDetail.image3;
        });
        this.productService.getProductById(id).subscribe((product: any) => {
            this.productDetail = product.productData.rows[0];
        });
        this.getComment(id);
    }
}
