import { Component, OnInit } from '@angular/core';
import { UseServiceService } from '../../../use-service.service';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
    selector: 'app-status-bill-user',
    templateUrl: './status-bill-user.component.html',
    styleUrls: ['./status-bill-user.component.scss'],
})
export class StatusBillUserComponent implements OnInit {
    pageCur: number = 0;
    bills: any;
    faChevronRight = faChevronRight;
    constructor(private UserService: UseServiceService, private router: Router) {}
    ngOnInit(): void {
        this.getData();
    }

    getData() {
        let key;
        if (this.pageCur === 0) {
            key = 'pending';
        } else if (this.pageCur === 1) {
            key = 'cancel';
        } else if (this.pageCur === 2) {
            key = 'shipping';
        } else {
            key = 'complete';
        }
        this.UserService.getBillsUser({ status: key }).subscribe((data: any) => {
            this.bills = data.billData.rows;
            this.bills.map((bill: any) => {
                bill.log.map((item: any) => {
                    item.products.map((variant: any) => {
                        variant.variants = JSON.parse(variant.variants);
                    });
                });
            });
        });
    }
    changePage(numberPage: number) {
        this.pageCur = numberPage;
        this.getData();
    }
    showDetailBill(data: any) {
        // console.log(e.srcElement.parentNode.nextElementSibling);

        // const el = e.srcElement.parentNode.nextElementSibling;
        // if (el?.style?.display !== 'block' && el) {
        //     el.style.display = 'block';
        // } else {
        //     el.style.display = 'none';
        // }
        console.log(data);

        this.router.navigateByUrl('profile/bill/' + data);
    }
    cancelBill(id: string) {}
}
