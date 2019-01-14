import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as fromTasksSummary from './tasksSummary-reducer';

import { environment } from '../../../environments/environment';

export interface IAppState {
  tasksSummary:  fromTasksSummary.State
}

export const reducers: ActionReducerMap<IAppState> = {
  tasksSummary : fromTasksSummary.tasksSummaryReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];