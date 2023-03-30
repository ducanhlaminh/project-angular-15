import { Component, Input, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
    selector: 'app-slide-picture-detail',
    templateUrl: './slide-picture-detail.component.html',
    styleUrls: ['./slide-picture-detail.component.scss'],
})
export class SlidePictureDetailComponent implements OnInit, AfterViewInit {
    @Input() product: any;
    picsProduct: any = [];
    constructor() {}
    ngAfterViewInit(): void {
        var a = $('#img-3');
        console.log(a);
    }
    ngOnInit() {
        $(function () {
            console.log($('#img-3'));
        });
    }
}
