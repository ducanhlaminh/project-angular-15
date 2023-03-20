import { createReducer, on } from '@ngrx/store';
import { getProductBegin, isLoading, getProductSuccess } from '../actions/app.actions';
const initialState = {
        status: false,
        products: [],
        loading: true,
};

export const appReducer = createReducer(
        initialState,
        on(getProductBegin, (state, action) => {
                return { ...state, loading: false };
        }),

        on(getProductSuccess, (state, action: any) => {
                return { ...state, products: action.data.productData.rows, loading: true };
        }),
);
