import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'date',
})
export class DateCustomPipe implements PipeTransform {
    transform(value: string): any {
        let date = new Date(value);
        return date.toLocaleDateString('vi-VN');
    }
}
