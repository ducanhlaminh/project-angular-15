import { Component, OnInit } from '@angular/core';
import { UseServiceService } from '../../../use-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-detail-bill',
    templateUrl: './detail-bill.component.html',
    styleUrls: ['./detail-bill.component.scss'],
})
export class DetailBillComponent implements OnInit {
    bill: any;
    total: any = 0;
    bid: any;
    constructor(private UserService: UseServiceService, private route: ActivatedRoute) {}
    ngOnInit(): void {
        let params: any = this.route.snapshot.params;
        this.bid = params.id;
        this.UserService.getBillsUserById(this.bid).subscribe((data: any) => {
            this.bill = data;
            this.getTotal();
        });
    }
    getTotal() {
        this.bill?.billData.map((data: any) => {
            this.total += data.cost * data.qty;
        });
        console.log(this.total);
    }
    cancelBill() {
        // this.UserService.deleteBill({id:this.bid,status:'cancel',addressId:})
    }
}
