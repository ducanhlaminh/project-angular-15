import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-input-form',
    templateUrl: './input-form.component.html',
    styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
    inforUser: any;
    @Input() lable: string = 'Lable input';
    @Input() valueText: string = '';
    @Output() newValueText = new EventEmitter<string>();
    onChangeValueText(e: any) {
        this.valueText = e.target.value;
        this.newValueText.emit(this.valueText);
    }
}
