import { createSelector } from '@ngrx/store';

export const appFeature = (state: any) => state.app;

export const selectFeatureProduct = createSelector(appFeature, (state: any) => state.products);
export const selectFeatureLoading = createSelector(appFeature, (state: any) => state.loading);
export const selectFeatureCount = createSelector(appFeature, (state: any) => state.count);
