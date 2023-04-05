import { Component } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
    loading: any;
    constructor(private LoadingService: LoadingService) {
        this.LoadingService.loading.subscribe((data) => (this.loading = data));
    }
}
