import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
        selector: 'app-input-field',
        templateUrl: './input-field.component.html',
        styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
        @Input() valueText: string = '';
        @Output() newValueText = new EventEmitter<string>();
        interval: any = null;
        timeout: any = null;
        onChangeValueText(event: any) {
                // if (this.interval) {
                //   clearInterval(this.interval);
                // }
                // this.interval = setInterval(() => {
                //         this.newValueText.emit(this.valueText);
                // }, 1000);

                if (this.timeout) {
                        clearTimeout(this.timeout);
                }
                this.timeout = setTimeout(() => {
                        console.log('get data');
                        // this.newValueText.emit(this.valueText);
                }, 5 * 1000);
        }
}
