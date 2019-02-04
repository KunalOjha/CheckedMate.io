import { Action } from '@ngrx/store';
import { Item } from 'models.ts/item.model';

export const REQUEST_USER_TASKS = 'REQUEST_USER_TASKS';
export const REQUEST_USER_TASKS_SUCCESS = 'REQUEST_USER_TASKS_SUCCESS';
export const REQUEST_USER_TASKS_ERROR = 'REQUEST_USER_TASKS_ERROR';

export class AddUserTask implements Action {
    readonly type = REQUEST_USER_TASKS;

    constructor(readonly payload: Item) {}
}

export class RequestUserTasks implements Action {
    readonly type = REQUEST_USER_TASKS;
}

export class RequestUserTasksSuccess implements Action {
    readonly type = REQUEST_USER_TASKS_SUCCESS

    constructor(readonly payload: any) {}
}

export class RequestUserTasksError implements Action {
    readonly type = REQUEST_USER_TASKS_SUCCESS
}

export type TaskListActions = 
AddUserTask |
RequestUserTasks | 
RequestUserTasksSuccess |
RequestUserTasksError