import { createSelector } from '@ngrx/store';

export const selectFeature = (state: any) => state;

export const selectFeatureCount = createSelector(selectFeature, (state: any) => state.loading.status);
