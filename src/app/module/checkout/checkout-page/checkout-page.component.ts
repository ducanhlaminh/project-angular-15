import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CartServiceService } from '../../cart/cart-service.service';
import { CheckOutService } from '../check-out.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-checkout-page',
    templateUrl: './checkout-page.component.html',
    styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
    infoUser = { name: '', phone: '', detailAddress: '' };
    proviceSelected: any;
    districtSelected: any;
    warnSelected: any;
    navigationSubscription: any;
    productCache: any;
    showAddress = true;
    myAddress: any = [];
    addressSelectedId: any;
    formAddress: any;

    toggleTag: boolean = true;
    constructor(
        public CheckOutService: CheckOutService,
        public CartService: CartServiceService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService,
    ) {}
    ngOnDestroy(): void {
        this.navigationSubscription.unsubscribe();
    }
    ngOnInit(): void {
        this.formAddress = new FormGroup({
            selectFormProvice: new FormControl('', Validators.required),
            selectFormDistrict: new FormControl('', Validators.required),
            selectFormWarn: new FormControl('', Validators.required),
            nameForm: new FormControl('', Validators.required),
            phoneForm: new FormControl('', Validators.required),
            detailAddress: new FormControl(''),
        });
        this.getAddress();

        this.CartService.getProductCache().subscribe((data: any) => (this.productCache = data.products));

        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationStart) {
                this.CartService.deleteCache().subscribe();
            }
        });
    }
    onChangeAddress() {
        this.showAddress = !this.showAddress;
    }
    showSuccess() {
        this.toastr.success('Đặt hàng thành công');
    }
    onChangeProvice(e: any) {
        this.proviceSelected = e?.value;
        this.districtSelected = null;
        this.warnSelected = null;
        this.CheckOutService.getDistrict(this.proviceSelected);
    }
    onChangeDistrict(e: any) {
        this.districtSelected = e?.value;

        this.warnSelected = null;
        this.CheckOutService.getWarn(this.districtSelected);
    }
    onChangeWarn(e: any) {
        this.warnSelected = e?.value;
    }

    convertJSON(value: any) {
        return JSON.stringify(value);
    }
    addAddress(e: any) {
        console.log(e?.value);

        this.CheckOutService.addAddress({
            address: JSON.stringify({
                proviceSelected: e?.value.selectFormProvice,
                districtSelected: e?.value.selectFormDistrict,
                warnSelected: e?.value.selectFormWarn,
                detailAddress: e?.value.detailAddress,
            }),
            name: e?.value.nameForm,
            phone: e?.value.phoneForm,
        }).subscribe((res: any) => {
            if (res.status === 0) {
                this.getAddress(), (this.toggleTag = true);
            }
        });
    }
    validateForm(number: any) {
        return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(number);
    }
    getAddress() {
        this.CheckOutService.getAddress().subscribe((data: any) => {
            data.yourAddress.map((item: any) => (item.address = JSON.parse(item.address)));
            if (data.yourAddress.length === 0) {
                this.toggleTag;
            }

            this.myAddress = data;
            this.addressSelectedId = this.myAddress.yourAddress[0].id;
        });
    }
    onChangesAddress(e: any) {
        console.log(e);
    }
    confirmBill() {
        let index = this.myAddress.yourAddress.findIndex((item: any) => item.id === this.addressSelectedId);
        this.CheckOutService.createBill(this.myAddress.yourAddress[index]).subscribe((data: any) => {
            if (data.status === 0) {
                this.showSuccess();
                this.router.navigateByUrl('/category/Do-gia-dung/OĐAIGNUD8');
            }
        });
    }
    setNameForm(e: any) {
        this.infoUser.name = e.target?.value;
    }
    setPhoneForm(e: any) {
        this.infoUser.phone = e.target?.value;
    }
    deleteAddress(id: any) {
        this.CheckOutService.deleteAddress(id).subscribe((res: any) => {});
    }
}
