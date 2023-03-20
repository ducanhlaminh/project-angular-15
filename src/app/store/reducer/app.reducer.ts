import { createReducer, on } from '@ngrx/store';
import { isLoading } from '../actions/app.actions';

const initialState = {
        status: false,
};

export const appReducer = createReducer(
        initialState,
        on(isLoading, (state) => {
                return { status: !state.status };
        }),
);
