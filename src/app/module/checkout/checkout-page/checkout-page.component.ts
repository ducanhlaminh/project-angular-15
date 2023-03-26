import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CartServiceService } from '../../cart/cart-service.service';
import { CheckOutService } from '../check-out.service';
import { debounceTime } from 'rxjs';
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
        constructor(
                public CheckOutService: CheckOutService,
                public CartService: CartServiceService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
        ) {}
        ngOnDestroy(): void {
                this.navigationSubscription.unsubscribe();
        }
        ngOnInit(): void {
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
        onChangeProvice(e: any) {
                this.proviceSelected = e.value;
                this.districtSelected = null;
                this.warnSelected = null;
                this.CheckOutService.getDistrict(this.proviceSelected);
        }
        onChangeDistrict(e: any) {
                this.districtSelected = e.value;

                this.warnSelected = null;
                this.CheckOutService.getWarn(this.districtSelected);
        }
        onChangeWarn(e: any) {
                this.warnSelected = e.value;
        }

        convertJSON(value: any) {
                return JSON.stringify(value);
        }
        addAddress() {
                this.validateForm(this.infoUser.phone) &&
                        this.CheckOutService.addAddress({
                                address: JSON.stringify({
                                        proviceSelected: this.proviceSelected,
                                        districtSelected: this.districtSelected,
                                        warnSelected: this.warnSelected,
                                }),
                                name: this.infoUser.name,
                                phone: this.infoUser.phone,
                        }).subscribe((res: any) => res.status === 0 && this.getAddress());
        }
        validateForm(number: any) {
                return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(number);
        }
        getAddress() {
                this.CheckOutService.getAddress().subscribe((data: any) => {
                        data.yourAddress.map((item: any) => (item.address = JSON.parse(item.address)));
                        console.log(data);

                        return (this.myAddress = data.yourAddress);
                });
        }
}
