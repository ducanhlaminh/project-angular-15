import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
    loading: any;
    constructor(private LoadingService: LoadingService) {
        this.LoadingService.loading.subscribe((data) => {
            this.loading = data;
        });
    }
}
