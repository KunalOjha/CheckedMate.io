import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as fromTasksSummary from '../reducers/tasksSummary.reducer';
import * as fromUser from '../reducers/user.reducer';

import { environment } from '../../../environments/environment';

export interface IAppState {
  user: fromUser.State,
  tasksSummary:  fromTasksSummary.State
}

export const reducers: ActionReducerMap<IAppState> = {
  user : fromUser.userReducer,
  tasksSummary : fromTasksSummary.tasksSummaryReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];