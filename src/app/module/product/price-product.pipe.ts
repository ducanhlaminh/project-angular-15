import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
        name: 'priceProduct',
})
export class PriceProductPipe implements PipeTransform {
        transform(value: number): string {
                return Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                }).format(value);
        }
}
