import { Item } from "models.ts/item.model";
import { TaskListActions, REQUEST_USER_TASKS } from '../actions/tasks.actions';

export interface State  {
    taskList : Item[]
}

const INITIAL_TASK_LIST_STATE: State = {
    taskList : []
}

export function taskListReducer(state = INITIAL_TASK_LIST_STATE, action) {
    switch(action.type) {
        case REQUEST_USER_TASKS:
    }
    return state
}