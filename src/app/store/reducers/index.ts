import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromTasksSummary from './tasksSummary.reducer';
import * as fromAuth from './auth.reducer';

import { environment } from '../../../environments/environment';

export interface IAppState {
  auth: fromAuth.State,
  tasksSummary:  fromTasksSummary.State
}

export const reducers: ActionReducerMap<IAppState> = {
  auth : fromAuth.authReducer,
  tasksSummary : fromTasksSummary.tasksSummaryReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];

export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');
export const selectIsLoggedIn = createSelector(
  selectAuthState,
  fromAuth.selectIsLoggedIn
);