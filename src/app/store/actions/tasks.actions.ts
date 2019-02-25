import { Action } from '@ngrx/store';
import { Task } from 'models.ts/task';

export const REQUEST_USER_TASKS = 'REQUEST_USER_TASKS';
export const REQUEST_USER_TASKS_SUCCESS = 'REQUEST_USER_TASKS_SUCCESS';
export const REQUEST_USER_TASKS_ERROR = 'REQUEST_USER_TASKS_ERROR';

export class AddUserTask implements Action {
    readonly type = REQUEST_USER_TASKS;

    constructor(readonly payload: Task) {}
}

export class RequestUserTasks implements Action {
    readonly type = REQUEST_USER_TASKS;
}

export class RequestUserTasksSuccess implements Action {
    readonly type = REQUEST_USER_TASKS_SUCCESS

    constructor(readonly payload: Task[]) {}
}

export class RequestUserTasksError implements Action {
    readonly type = REQUEST_USER_TASKS_SUCCESS
}

export type TaskListActions = 
AddUserTask |
RequestUserTasks | 
RequestUserTasksSuccess |
RequestUserTasksError