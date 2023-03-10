import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
        selector: 'app-input-field',
        templateUrl: './input-field.component.html',
        styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
        @Input() valueText: string = '';
        @Output() newValueText = new EventEmitter<string>();
        onChangeValueText() {
                // console.log(this.valueText);
                this.newValueText.emit(this.valueText);
        }
}
