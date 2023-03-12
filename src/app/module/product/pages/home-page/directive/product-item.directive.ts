import { Directive, ElementRef, AfterViewInit, HostListener, HostBinding } from '@angular/core';

@Directive({
        selector: '[appProductItem]',
})
export class ProductItemDirective implements AfterViewInit {
        el: ElementRef;
        toogleShowBuy: boolean = true;
        childElement: ElementRef;
        constructor(el: ElementRef) {
                this.el = el;
        }
        ngAfterViewInit() {
                this.childElement = this.el.nativeElement.childNodes[0].lastChild.lastChild;
        }
        @HostListener('mouseenter') onmouseenter() {
                this.el.nativeElement.childNodes[0].lastChild.lastChild.style.display = 'flex';
        }
        @HostListener('mouseleave') onmouseleave() {
                this.el.nativeElement.childNodes[0].lastChild.lastChild.style.display = 'none';
        }
}
