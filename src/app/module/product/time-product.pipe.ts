import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeProduct',
})
export class TimeProductPipe implements PipeTransform {
    transform(value: string): any {
        let date = new Date(value);
        return date.toLocaleTimeString();
    }
}
