import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as fromUser from '../reducers/user.reducer';
import * as fromTasks from '../reducers/tasks.reducer'

import { environment } from '../../../environments/environment';

export interface IAppState {
  user: fromUser.State,
  taskList : fromTasks.State
}

export const reducers: ActionReducerMap<IAppState> = {
  user: fromUser.userReducer,
  taskList: fromTasks.taskListReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];