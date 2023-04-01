import { Component, Input, OnInit, OnChanges, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-slide-picture-detail',
    templateUrl: './slide-picture-detail.component.html',
    styleUrls: ['./slide-picture-detail.component.scss'],
})
export class SlidePictureDetailComponent implements OnInit, AfterViewInit {
    @Input() product: any;
    picsProduct: any = [];
    constructor() {}
    ngAfterViewInit(): void {}
    ngOnInit() {}
}
