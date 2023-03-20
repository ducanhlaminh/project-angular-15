import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ProductServiceService } from 'src/app/module/product/product-service.service';
import { getProductBegin } from '../actions/app.actions';
@Injectable()
export class AppEffects {
        getProduct$ = createEffect(() =>
                this.actions$.pipe(
                        ofType('getProductBegin'),

                        exhaustMap((action: any) =>
                                this.productService.getProduct(action.data).pipe(
                                        map((product) => ({
                                                type: 'getProductSuccess',
                                                data: product,
                                        })),
                                        catchError(() => EMPTY),
                                ),
                        ),
                ),
        );

        constructor(private actions$: Actions, private productService: ProductServiceService) {}
}
