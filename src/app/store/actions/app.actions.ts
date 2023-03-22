import { createAction, props } from '@ngrx/store';
export const isLoading = createAction('isLoading');
export const complete = createAction('complete');
export const getProductBegin = createAction('getProductBegin', props<{ data: any }>());
export const getProductSuccess = createAction('getProductSuccess', props<{ data: any }>());
export const getCurrent = createAction('getCurrent');
