import { Task } from "models.ts/task";
import { TaskListActions, REQUEST_USER_TASKS, REQUEST_USER_TASKS_SUCCESS } from '../actions/tasks.actions';

export interface State  {
    taskList : Task[]
}

const INITIAL_TASK_LIST_STATE: State = {
    taskList : []
}

export function taskListReducer(state = INITIAL_TASK_LIST_STATE, action) {
    switch(action.type) {
        case REQUEST_USER_TASKS_SUCCESS:
            return {
                ...state,
                taskList : action.payload
            } 
    }
    return state
}